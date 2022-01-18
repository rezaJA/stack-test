import Bet from "./features/Bet";
import Dice from "./features/Dice";
import Player from "./features/Player";
import Director from "./features/Director";

const prompt = require('prompt');

export default class Game {
    private readonly player: Player;
    private readonly director: Director;
    private readonly dice: Dice;
    private bet?: Bet;

    constructor() {
        this.dice = new Dice();
        this.player = new Player();
        this.director = new Director();
    }

    readonly start = async () => {
        const [name, stakeDeposit, selectedNumbers] = await this.enrollUser();
        this.player.name = name;
        this.bet = new Bet(this.player, this.director, stakeDeposit, selectedNumbers);
        this.player.dice = this.dice;

        const userDiceNumbers = [];
        for (let time in this.bet.getSelectedNumbers())
            userDiceNumbers.push(this.player.dice.rollDice());

        const result = this.bet.performBet(userDiceNumbers).getReward();
        console.log(result);
    }

    private readonly enrollUser = async (): Promise<[string, number, number[]]> => {
        prompt.start();
        let {name, stakeDeposit, selectedNumbers} = await prompt.get(["name", "stakeDeposit", "selectedNumbers"]);
        let selectedNumbersArray: string[] = selectedNumbers.split(",");

        return [name, parseInt(stakeDeposit), selectedNumbersArray.map(x => parseInt(x.trim()))];
    }
}