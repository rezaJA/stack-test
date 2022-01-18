import User, {Roll} from "./User";

export default class Player extends User{
    constructor() {
        super();

        this.role = Roll.Player;
        this.name = "Player";
    }
}