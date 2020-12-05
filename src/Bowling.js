class Bowling {
    constructor() {
        this.rolls = [];
        this.frame = 0;
        this.TOTALFRAMES = 10;
        this.TOTALPINS = 10;
    }

    roll(pins){
        if (this.gameOver()) {
            throw new Error('Your game is now complete');
        }
        this.rolls.push(pins)
    }

    currentTotal() {
        function add(x, y) {
            return x + y
        }
        return this.rolls.reduce(add, 0)
    };

    score(){
        let result = 0;
        let rollIndex = 0;

        for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
            this.frame++;
            if (this.isStrike(rollIndex)){
                result += this.strikeScore(rollIndex);
                rollIndex += 1;
                continue;
            }

            const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1]
            if (this.isSpare(frameScore)){
                result += this.spareScore(rollIndex);
                rollIndex += 2;
            }
            else {
                result += frameScore;
                rollIndex += 2;
            }
        }
        return result
    }

    gameOver(){
        return this.rolls.count >= 21 || this.frame >= this.TOTALFRAMES;
    }

    isStrike(rollIndex){
        return (this.rolls[rollIndex] === this.TOTALPINS);
    }

    isSpare(frameScore){
        return frameScore === this.TOTALPINS;
    }

    strikeScore(rollIndex){
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    }

    spareScore(rollIndex){
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    }
}