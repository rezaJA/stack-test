export default class Dice {
    private MIN = 1;
    private MAX = 6;

    readonly rollDice = (): number => {
        return Math.floor(Math.random() * (this.MAX - this.MIN + 1) + this.MIN);
    }

    public static readonly getValidNumbers = (): number[] => {
        return [1, 2, 3, 4, 5, 6];
    }

}