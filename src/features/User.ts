import Bet from "./Bet";
import Dice from "./Dice";

export enum Roll {
    Director,
    Player
}

export default class User {
    name?: string;
    role?: Roll;
    bet?: Bet;
    dice?: Dice;
}