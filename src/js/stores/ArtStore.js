import {EventEmitter} from "events";
import Audreyimg from "../../img/art/audrey.JPG"
import StarsImg from "../../img/art/stars.JPG"
import BeachImg from "../../img/art/beach.JPG"
import BirdpenImg from "../../img/art/birdpen.JPG"
import DeerImg from "../../img/art/deer.JPG"
import MonkeyImg from "../../img/art/monkey.jpg"
import PenImg from "../../img/art/pen.jpg"

class ArtStore extends EventEmitter {
    constructor() {
        super()
        this.art = [{
            img: Audreyimg,
            name: "Audrey Hepburn",
            medium: "conte crayon",
            desc: "",
            date: "2016 March",
        },
        {
            img: StarsImg,
            name: "Stars",
            medium: "Photography + Processing Script",
            desc: "",
            date: "",
        },
        {
            img: BeachImg,
            name: "Beach",
            medium: "Photography + Processing Script",
            desc: "",
            date: "",
        },
        {
            img: BirdpenImg,
            name: "Birdy",
            medium: "Pen",
            desc: "",
            date: "",
        },
        {
            img: DeerImg,
            name: "Christmas Deer",
            medium: "Digital",
            desc: "",
            date: "Dec 2015",
        },
        {
            img: MonkeyImg,
            name: "Monkey",
            medium: "Watercolor",
            desc: "",
            date: "",
        },
        {
            img: PenImg,
            name: "Dude",
            medium: "Pen",
            desc: "",
            date: "",
        },];
    }
    getAllArt() {
        return this.art;
    }
    getSampleArt() {
        return {
            img: "",
            name: "",
            medium: "",
            desc: "",
            date: "",
        }
    }

}
const artStore = new ArtStore();

export default artStore;