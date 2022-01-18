import BetResult from "./BetResult";
import Dice from "./Dice";
import Player from "./Player";
import Director from "./Director";
import InvalidSelectedNumbers from "../exceptions/InvalidSelectedNumbers";

export default class Bet {
    player: Player;
    director: Director;
    private stakeDeposit: number = 0;
    private selectedNumbers: number[] = [];

    constructor(player: Player, director: Director, stakeDeposit: number, selectedNumbers: number[]) {
        this.player = player;
        this.director = director;
        this.setStakeDeposit(stakeDeposit);
        this.setSelectedNumbers(selectedNumbers);
    }

    readonly setSelectedNumbers = (selectedNumbers: number[]): boolean => {
        if (selectedNumbers.length === 0 || selectedNumbers.length === 6)
            throw new InvalidSelectedNumbers();

        const validNumbers = Dice.getValidNumbers();
        for (let number of selectedNumbers) {
            if (!validNumbers.includes(number) || selectedNumbers.filter(x => x==number).length > 1)
                throw new InvalidSelectedNumbers();

            this.selectedNumbers.push(number);
        }

        return true;
    }

    readonly getSelectedNumbers = (): number[] => {
        return this.selectedNumbers;
    }

    readonly setStakeDeposit = (stakeDeposit: number) => {
        this.stakeDeposit = stakeDeposit;
    }

    readonly getStakeDeposit = (): number => {
        return this.stakeDeposit;
    }

    public readonly performBet = (userDiceNumbers: number[] = []): BetResult => {
        return new BetResult(this, userDiceNumbers);
    }
}