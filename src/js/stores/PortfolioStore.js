import { EventEmitter } from "events";
import SyncUQImg from "../../img/syncuq.png";
import RGAimg from "../../img/rgaBanner.jpg";
import RayTrace from "../../img/raytrace.png";
import Scopie from "../../img/scopie.png";
import Telephasic from "../../img/telephasic.png";
import DriveSafeimg from "../../img/drivesafeimg.jpg";
import Punctualityimg from "../../img/punctuality.JPG";
import MusicThing from "../../img/musicthing.png";
class PortfolioStore extends EventEmitter {
  constructor() {
    super();
    this.portfolioCards = [
      {
        name: "Telephasic",
        desc: "A VFX studio for AI algorithmic video art",
        date: "2021",
        imgurl: Telephasic,
        what: "Telephasic is a studio I started to make AI VFX for people in music and film. Recently I did the AI Visuals for Kid Cudi & Young Thug's music video 'Moonman'",
        how: "I made my own system in python that uses CLIP & VQGAN plus some other algorithms im working on to effectively style-transfer semantic aesthetics onto any kind of video. I pair this with some audiovisual algorithms i made in TouchDesigner to produce sound responsive AI VFX",
        why: "I've always loved making music videos and tinkering with audiovisual generative art, in Aug 2021 I spent some time writing my own style transfer system using some new technology that had come out. The result was a first of its kind video style transfer algorithm that I commercialised to produce VFX for artists",
        techs: "Python, PyTorch, VQGAN, CLIP, TouchDesigner, Premier Pro",
        github: "",
        demo: "https://telephasic.studio",
        photo: "",
        logoIcon: "waves",
        logoText: "",
      },
      {
        name: "Scopie",
        desc: "A prioritization tool for Product Managers at SaaS companies",
        date: "2018 - 2019",
        imgurl: Scopie,
        what: "Scopie is a prioritization tool for use by product companies to help them understand what feedback is most important and actionable. It focuses on two constructed metrics, the relative 'value' of an idea, and the relative 'effort' of the idea. The value vs effort score would then provide a clear single metric on whether the idea was worth doing",
        how: "I designed the entire UI & UX in figma, mapping out the entire product experience. I created an MVP of the product using typescript, react, and firebase, but after some use I put the idea aside to focus on other things",
        why: "I was working as a Product Manager for Automated Rostering at Tanda and was growing increasingly frustrated with the complexity of the current tools on the market. Jira, Canny, Asana, all had way too much overhead to solve a problem that I could see as fundamentally much simpler than they made it out to be",
        techs: "Figma, Typescript, Firebase, React",
        github: "",
        demo: "https://docs.google.com/presentation/d/1T1r7GRvqChPEzXr4EJlaho5Uq0AlbvybisW8LVCiy20/edit?usp=sharing",
        photo: "",
        logoIcon: "arrow_circle_up",
        logoText: "",
      },
      {
        name: "Music Thing",
        desc: "A generative audiovisual DJ tool made in browser",
        date: "2020",
        imgurl: MusicThing,
        what: "'Music Thing' is a result of lots of experimenting in javascript and audioreactive generative art. From scratch I built a 3D engine in html-canvas to make cool sound reactive patterns and objects",
        how: "It started as an experiment to make generative art in browser, but finally evolved into this DJ console that allows you to sync the visuals to audio BPM and bars. The code is intentionally a bit of a mess, i found by limiting abstractions I could stumble into very cool 'accidents', making development much more fun",
        why: "I just love messing around with ideas I have and seeing where they go, this is one example of that actually ended up turning into a somewhat finished project",
        techs: "Javascript (with flow type system), HTML",
        github: "",
        demo: "http://projects.charltongroves.com/music_thing/",
        photo: "",
        logoIcon: "equalizer",
        logoText: "",
      },
      {
        name: "Ray Tracing in JS",
        desc: "A 500 line JS implemenation of ray tracing ",
        date: "2019",
        imgurl: RayTrace,
        what: "Ray Trace is a small project i built over a weekend that simulates full ray tracing in JS",
        how: "Using my background in mathematics and physics, I wanted to see if i could build from scratch a ray tracer in browser. After reading some papers i gave it a shot and ended up with this. It works pretty well! but rendering time makes it mostly unusable for realtime video",
        why: "I wanted to understand ray tracing more and thought it would be fun to do in browser. It wasn't meant for anything more than just a learning experience",
        techs: "Javascript",
        github: "",
        demo: "http://projects.charltongroves.com/ray_trace/",
        photo: "",
        logoIcon: "code",
        logoText: "",
      },
      {
        name: "SyncUQ",
        desc: "UQ based timetable sharing multiplatform app",
        date: "may 2017 - feb 2017",
        imgurl: SyncUQImg,
        what:
          "SyncUQ is the first UQ exclusive schedule sharing social media platform. It lets" +
          " users find when their friends are on a break between uni classes, allowing them" +
          " to quickly find friends who are free to hangout with. NOTE: as of 19/03/2017, S" +
          "yncUQ is still under construction. A full release will be avaliable in late May " +
          "2017.",
        how:
          "SyncUQ runs on the heroku platform, it uses a Python backend (using the flask fr" +
          "amework) and utilises SQLAlchemy as an ORM to a postgres database. The front end" +
          " is written in PureScript, a strongly typed lang which compiles to html/css/js.",
        why:
          "SyncUQ was made by myself, Max Bo, and Hugo Kawamata. It was conceived after we " +
          "all realised how often we ask each other 'are you free?' or 'you at uni?'. We pi" +
          "tched it to a few classmates who all agreed that it would be an awesome app, aft" +
          "er this we got to work.",
        techs: "Elm, Python(Flask), Postgres, HTML/CSS",
        github: "",
        logoIcon: "people",
        logoText: "",
        demo: "http://syncuq.com",
        photo: "",
      },
      {
        name: "DriveSafe",
        desc: "First place solution to Brisbane Unearthed Hackathon",
        date: "apr 2017",
        imgurl: DriveSafeimg,
        what:
          "A multiplatform webapp that processes IVMS data into easy to read feedback on ho" +
          "w you are driving. Its aim to encourage drivers to drive safer, and to provide a" +
          " much needed digital overhaul to the current office health and saftey drive repo" +
          "rting",
        how:
          "The apps frontend was developed in react. The backend is python, using the flask" +
          " microframework, and mariaDB",
        why:
          "In April I attended my first ever hackathon. On the first I night I knew no one " +
          "and joined a team of datascientists from UQ. I came up with the idea for the app" +
          ", pitched it to them and they loved it. After this I was responsible for UI/UX d" +
          "esign, product design, and all the front end work. In 48 hours I came up with th" +
          "is",
        techs: "React.js, Python(Flask), MariaDB",
        github: "",
        logoIcon: "directions_car",
        logoText: "",
        demo: "http://projects.charltongroves.com/drivesafe",
        photo: "",
      },
      {
        name: "Personal website",
        desc: "the website you're looking at right now",
        date: "may 2017 - apr 2017",
        imgurl: "",
        what: "A simple portfolio website for myself",
        how: "This website was made using react. I used some Material UI componenets, and a simple react router",
        why: "I wanted to write something in React so I built this. It's dead simple and designed to be easily edited as I change my portfolio over time",
        techs: "React, JS, JSX",
        github: "",
        logoIcon: "web",
        logoText: "",
        demo: "",
        photo: "",
      },
      {
        name: "Space",
        desc: "A fun infinite 3d universe",
        date: "apr 2017",
        imgurl: "",
        what: "Try it for yourself and see!",
        how: "CSS3, HTML, tiny bit of JS",
        why: "I got bored one night and thought of this as something fun to do",
        techs: "HTML, JS",
        github: "",
        demo: "http://projects.charltongroves.com/asteroids/",
        photo: "",
        logoIcon: "rocket",
        logoText: "",
      },
      {
        name: "Color",
        desc: "A small fun HTML & CSS project",
        date: "apr 2017",
        imgurl: "",
        what: "A cool generative artwork which you can click & use the arrow keys to manipulate",
        how: "dead simple JS and HTML",
        why: "I got bored one night and thought of this as something fun to do",
        techs: "HTML, JS",
        github: "",
        demo: "http://projects.charltongroves.com/space/",
        photo: "",
        logoIcon: "color_lens",
        logoText: "",
      },
      {
        name: "Punctuality",
        desc: "A widget that allows managers to see a succint overview of their employee",
        date: "mar 2017",
        imgurl: Punctualityimg,
        what:
          "A widget that allows managers to see a succint overview of their employees 'punc" +
          "tuality data'",
        how:
          "Punctuality was written in JS/jQuery/CSS, it used moment.js, d3.js, and a few ot" +
          "her open source JS libraries",
        why: "This was a solution to Tanda's 'punctuality' open source problem.",
        techs: "JS, jQuery, HTML/CSS",
        github: "",
        logoIcon: "date_range",
        logoText: "",
        demo: "https://my.mixtape.moe/cprfbt.mp4",
        photo: "",
      },
    ];
  }
  getAllCards() {
    return this.portfolioCards;
  }
  getSampleCard() {
    return {
      name: "",
      desc: "",
      date: "",
      imgurl: "",
      what: "",
      how: "",
      why: "",
      techs: "",
      github: "",
      demo: "",
      photo: "",
      logoIcon: "",
      logoText: "",
    };
  }
}
const portfolioStore = new PortfolioStore();

export default portfolioStore;
