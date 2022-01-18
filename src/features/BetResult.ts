import Bet from "./Bet";

export default class BetResult {
    bet: Bet;
    userDiceNumbers: number [];

    constructor(bet: Bet, userDiceNumbers: number[]) {
        this.bet = bet;
        this.userDiceNumbers = userDiceNumbers;
    }

    readonly getReward = (): string => {
        const reward = this.calculateReward();
        return `Player ${this.bet.player.name} has ${reward >= 0 ? "won" : "lost"} ${reward}$`;
    }

    readonly calculateReward = (): number => {
        let reward = 0;
        const oneCorrectAnswerReward = this.bet.getStakeDeposit() / this.bet.getSelectedNumbers().length;
        for (let num of this.userDiceNumbers)
            if (this.bet.getSelectedNumbers().includes(num))
                reward += oneCorrectAnswerReward;
            else
                reward -= oneCorrectAnswerReward;

        return Math.ceil(reward);
    }

}