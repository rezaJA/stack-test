import Player from "../../src/features/Player";
import Director from "../../src/features/Director";
import Bet from "../../src/features/Bet";
import InvalidSelectedNumbers from "../../src/exceptions/InvalidSelectedNumbers";

jest.mock("../../src/features/Player.ts")
jest.mock("../../src/features/Director.ts")

beforeAll(() => {
    Player.mockClear();
    Director.mockClear()
})

const invalidSelectedNumbers = [
    {desc: "complete dice numbers selected", selectedNumbers: [1, 2, 3, 4, 5, 6]},
    {desc: "no selected numbers", selectedNumbers: []},
    {desc: "invalid dice numbers selected", selectedNumbers: [1, 2, 30]},
]

describe.each(invalidSelectedNumbers)("Test bet object creation with ", (facts) => {
    it(`${facts.desc} must throw exception`, function () {
        const player = new Player();
        const director = new Director();
        const stakeDeposit = 100;
        expect(() => new Bet(player, director, stakeDeposit, facts.selectedNumbers)).toThrow(InvalidSelectedNumbers);
    });
})

test("Test bet object creation with valid dice numbers selected",
    () => {
        const player = new Player();
        const director = new Director();
        const stakeDeposit = 100;
        const selectedNumbers: number[] = [1, 3];
        const bet = new Bet(player, director, stakeDeposit, selectedNumbers);
        expect(bet.getSelectedNumbers()).toEqual([1, 3]);
    }
)