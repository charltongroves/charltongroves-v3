import { EventEmitter } from "events";

class CodeStore extends EventEmitter {
    constructor() {
        super()
        this.codeCards = [
            {
                name: "SyncUQ",
                desc: "Thing",
                imgurl: "../../img/logo.svg",
                what: "",
                why: "",
            },
            {
                name: "Punctuality",
                desc: "Thing",
                imgurl: "../../img/logo.svg",
                what: "",
                why: "",
            },
            {
                name: "Pings",
                desc: "Thing",
                imgurl: "../../img/logo.svg",
                what: "",
                why: "",
            },
            {
                name: "Analysis",
                desc: "Thing",
                imgurl: "../../img/logo.svg",
                what: "",
                why: "",
            },
            {
                name: "",
                desc: "Thing",
                imgurl: "../../img/logo.svg",
                what: "",
                why: "",
            },
            {
                name: "SyncUQ",
                desc: "Thing",
                imgurl: "../../img/logo.svg",
                what: "",
                why: "",
            },
            {
                name: "SyncUQ",
                desc: "Thing",
                imgurl: "../../img/logo.svg",
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