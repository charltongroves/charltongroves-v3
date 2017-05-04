import {EventEmitter} from "events";

class DesignStore extends EventEmitter {
    constructor() {
        super()
        this.works = [
            {
                name: "syncUQ",
                about: "",
                process1: {
                    img: "",
                    notes: ""
                },
                process2: {
                    img: "",
                    notes: ""
                },
                process3: {
                    img: "",
                    notes: ""
                },
                final: {
                    img: "",
                    notes: ""
                },
                implementation: {
                    link: "",
                    img: "",
                    notes: ""
                }
            }, {
                name: "DriveSafe",
                about: "",
                process1: {
                    img: "",
                    notes: ""
                },
                process2: {
                    img: "",
                    notes: ""
                },
                process3: {
                    img: "",
                    notes: ""
                },
                final: {
                    img: "",
                    notes: ""
                },
                implementation: {
                    link: "",
                    img: "",
                    notes: ""
                }
            }, {
                name: "RGA",
                about: "",
                process1: {
                    img: "",
                    notes: ""
                },
                process2: {
                    img: "",
                    notes: ""
                },
                process3: {
                    img: "",
                    notes: ""
                },
                final: {
                    img: "",
                    notes: ""
                },
                implementation: {
                    link: "",
                    img: "",
                    notes: ""
                }
            },
        ];
    }
    getAllWork() {
        return this.works;
    }
    getSampleArt() {
        return {
            title: "",
            about: "",
            process1: {
                img: "",
                notes: ""
            },
            process2: {
                img: "",
                notes: ""
            },
            process3: {
                img: "",
                notes: ""
            },
            final: {
                img: "",
                notes: ""
            },
            implementation: {
                img: "",
                notes: ""
            }
        }
    }

}
const designStore = new DesignStore();

export default designStore;