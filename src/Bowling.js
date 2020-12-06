class Bowling {
    constructor() {
        this.rolls = [];
        this.frame = 0;
        this.TOTALFRAMES = 10;
        this.TOTALPINS = 10;
    }

    roll = pins => {
        if (!this.#_gameOver()) {
            this.rolls.push(pins)
        } else throw new Error('Your game is now complete');
    };

    currentTotal = () => {
        const add = (x, y) => x + y;
        return this.rolls.reduce(add, 0)
    };

    score = () => {
        let result = 0, rollIndex = 0, frameIndex;
        for (frameIndex = 0; frameIndex < 10; frameIndex++) {
            this.frame++;
            if (!this.#_isStrike(rollIndex)) {
                const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1]
                if (this.#_isSpare(frameScore)) {
                    result += this.#_spareScore(rollIndex);
                    rollIndex += 2;
                } else {
                    result += frameScore;
                    rollIndex += 2;
                }
            } else {
                result += this.#_strikeScore(rollIndex);
                rollIndex += 1;
            }
        }
        return result
    };

    #_gameOver = () => {
        return this.rolls.count >= 21 || this.frame >= this.TOTALFRAMES;
    };

    #_isStrike = rollIndex => {
        return this.rolls[rollIndex] === this.TOTALPINS;
    };

    #_isSpare = frameScore => {
        return frameScore === this.TOTALPINS;
    };

    #_strikeScore = rollIndex => {
        return this.TOTALPINS + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    };

    #_spareScore = rollIndex => {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    };
}