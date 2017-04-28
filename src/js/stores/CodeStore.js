import { EventEmitter } from "events";

class CodeStore extends EventEmitter {
    constructor() {
        super()
        this.codeCards = [
            {
                title: "SyncUQ",
                shortDesc: "Thing",
                how: "",
                what: "",
                why: "",
            },
            {
                title: "SyncUQ",
                shortDesc: "Thing",
                how: "",
                what: "",
                why: "",
            },
            {
                title: "SyncUQ",
                shortDesc: "Thing",
                how: "",
                what: "",
                why: "",
            },
        ];
    }
    getAllCards() {
        return this.codeCards;
    }

}
const codeStore = new CodeStore();

export default codeStore;