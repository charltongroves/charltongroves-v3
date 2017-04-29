import { EventEmitter } from "events"

class ColorStore extends EventEmitter {
    constructor() {
        super()
        this.colors = {
            backgroundColor: "#00A0B0"
        }
    }
}