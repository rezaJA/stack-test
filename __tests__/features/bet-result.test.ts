import Bet from "../../src/features/Bet";
import BetResult from "../../src/features/BetResult";


jest.mock("../../src/features/Bet.ts")

test("Every correct/wrong dice number must be rewarded/fined one total chances of stake deposit", () => {
    Bet.mockClear();
    Bet.mockImplementation(() => ({
        player: {name: "test player"},
        getStakeDeposit: () => 1200,
        getSelectedNumbers: () => [2, 4, 5]
    }))

    const betResult = new BetResult(new Bet(), [2, 1, 5]);

    expect(betResult.calculateReward()).toBe(400);
})