
export default class InvalidSelectedNumbers extends Error{
    constructor() {
        super();

        this.message = "Invalid selected numbers!";
    }
}