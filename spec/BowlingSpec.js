'use strict';

describe('Bowling', function () {
    let bowling

    beforeEach(function () {
        bowling = new Bowling();
    });

    it('returns a gutter game', function () {
        rollMany(0, 20)
        expect(bowling.score()).toEqual(0)
    })

    it('can have a game where every roll is 2', function () {
        rollMany(2, 20)
        expect(bowling.score()).toEqual(40)
    })

    it('can calculate a spare', function () {
        bowling.roll(5);
        bowling.roll(5);
        bowling.roll(2);
        rollMany(0, 17)
        expect(bowling.score()).toEqual(14)
    })

    it('can calculate a strike', function () {
        bowling.roll(10);
        bowling.roll(3);
        bowling.roll(4);
        rollMany(0, 17)
        expect(bowling.score()).toEqual(24)
    })

    it ('can calculate multiple strikes', function () {
        rollMany(10, 2)
        bowling.roll(3)
        rollMany(0,15)
        expect(bowling.score()).toEqual(39)
    })

    it('correctly checks a perfect game', function () {
        rollMany(10,12)
        expect(bowling.score()).toEqual(300)
    })

    it('stops a player throwing too many rolls', function () {
        rollMany(10, 22)
        expect(bowling.score()).toEqual(300)
    })

    it('gives a bonus if strike or spare in 10th frame', function () {
        rollMany(0, 18)
        rollMany(10, 3)
        expect(bowling.score()).toEqual(30)
    })

    it('stops after the bonus rolls', function () {
        rollMany(0, 18)
        rollMany(10, 3)
        expect(bowling.score()).toEqual(30)
    })

    it('stops bonus if game doesnt end with strike', function () {
        rollMany(10, 9)
        bowling.roll(5)
        bowling.roll(4)
        expect(bowling.score()).toEqual(263)
    })

    xit('allows for a partial score to be calculated', function () {
        rollMany(5, 3)
        expect(bowling.currentTotal()).toEqual(20);
    })

    function rollMany(pins, rolls) {
        for (let i = 0; i < rolls; i++) {
            bowling.roll(pins);
        }
    }
});

