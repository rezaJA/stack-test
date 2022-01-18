import User, {Roll} from "./User";


export default class Director extends User {
    constructor() {
        super();

        this.role = Roll.Director;
        this.name = "Director";
    }

}