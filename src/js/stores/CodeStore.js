import { EventEmitter } from "events";

class CodeStore extends EventEmitter {
    constructor() {
        super()
        this.codeCards = [
            {
                name: "SyncUQ",
                desc: "UQ based timetable sharing multiplatform app",
                date: "may 2017 - feb 2017",
                imgurl: "../../img/logo.svg",
                what: "SyncUQ is the first UQ exclusive schedule sharing social media platform. \
                It lets users find when their friends are on a break between uni classes, allowing \
                them to quickly find friends who are free to hangout with. NOTE: as of 19/03/2017, \
                SyncUQ is still under construction. A full release will be avaliable in late May 2017.",

                how: "SyncUQ runs on the heroku platform, it uses a Python backend (using the flask \
                framework) and utilises SQLAlchemy as an ORM to a postgres database. The front end is \
                written in PureScript, a strongly typed lang which compiles to html/css/js.",

                why: "SyncUQ was made by myself, Max Bo, and Hugo Kawamata. It was conceived after we \
                all realised how often we ask each other 'are you free?' or 'you at uni?'. We pitched \
                it to a few classmates who all agreed that it would be an awesome app, after this we \
                got to work.",

                techs: "Elm, Python(Flask), Postgres, HTML/CSS",
                github: "",
                demo: "",
                photo: "",
            },
            {
                name: "charltongroves v3",
                desc: "the website you're looking at right now",
                date: "may 2017 - apr 2017",
                imgurl: "../../img/logo.svg",
                what: "This is my 3rd attempt at a personal portfolio site for myself",
                how: "This website was made using react. I used some Material UI componenets, and I implemented\
                the parralax landscape thing on the homepage using a method from some codepen.",
                why: "On my last attempt, I finally had a decent understanding of html, css, and jQuery.\
                I put my skills to the test and ended up with a site that i thought was pretty damn good.\
                However, just as I finished, i began learning about the wonderful world of react. I really \
                needed a project to test my new react skills on so I made this.",
                techs: "React, JS, JSX",
                github: "",
                demo: "",
                photo: "",
            },
            {
                name: "DriveSafe",
                desc: "First place solution to Brisbane Unearthed Hackathon",
                date: "apr 2017",
                imgurl: "../../img/logo.svg",
                what: "A multiplatform webapp that processes IVMS data into easy to read feedback on how\
                you are driving. Its aim to encourage drivers to drive safer, and to provide a much needed \
                digital overhaul to the current office health and saftey drive reporting",
                how: "The apps frontend was developed in react. The backend is python, using the flask microframework,\
                and mariaDB",
                why: "In April I attended my first ever hackathon. On the first I night I knew no one and \
                joined a team of datascientists from UQ. I came up with the idea for the app, pitched it to them\
                and they loved it. After this I was responsible for UI/UX design, product design, and all the \
                front end work. In 48 hours I came up with this",
                techs: "React.js, Python(Flask), MariaDB",
                github: "",
                demo: "",
                photo: "",
            },
            {
                name: "Punctuality",
                desc: "A widget that allows managers to see a succint overview of their employee",
                date: "mar 2017",
                imgurl: "../../img/logo.svg",
                what: "A widget that allows managers to see a succint overview of their employees \
                'punctuality data'",
                how: "Punctuality was written in JS/jQuery/CSS, it used moment.js, d3.js, and a few \
                other open source JS libraries",
                why: "This was a solution to Tanda's 'punctuality' open source problem.",
                techs: "JS, jQuery, HTML/CSS",
                github: "",
                demo: "https://www.google.com",
                photo: "",
            },
            {
                name: "Pings",
                desc: "A small ruby api that grabs device pings from a postgres db",
                date: "mar 2017",
                imgurl: "../../img/logo.svg",
                what: "A small ruby api that grabs device pings from a postgres db. It allows the user\
                to grab pings from a ceratain date, device, and/or range of dates",
                how: "Pings was written in Ruby using the sinatra microframework. It uses activerecord as an \
                orm to a postgres db",
                why: "Pings was made for the Tanda 'Pings' problem",
                techs: "Ruby (Sinatra), Postgres",
                github: "",
                demo: "",
                photo: "",
            },
            {
                name: "Analysis",
                desc: "A scalable python script that parses user settings csv documents and analyzes them",
                date: "mar 2017",
                imgurl: "../../img/logo.svg",
                what: "A scalable python script that parses user settings csv documents and analyzes them",
                how: "Analysis was written in python, it uses the sciPy stack to generate some pretty graphs",
                why: "A response to the Tanda 'analysis' problem",
                techs: "Python, SciPy",
                github: "",
                demo: "",
                photo: "",
            },
            {
                name: "charltongroves v2",
                desc: "my personal website, written in html, JS, jQuery",
                date: "mar 2017 - jan 2017",
                imgurl: "../../img/logo.svg",
                what: "",
                how: "",
                why: "",
                techs: "",
                github: "",
                demo: "",
                photo: "",
            },
            {
                name: "duXCOM",
                desc: "An open source, isometric, turn based, medieval duck themed video game",
                date: "nov 2016 - sep 2016",
                imgurl: "../../img/logo.svg",
                what: "Duxcom is an open source, isometric, turn based, medieval duck themed video game",
                how: "The game was made using a plethora of technologies, utilising test driven development \
                and continuous integration . Throghout the project I wrote all my code in Java (with a bit \
                of JSON) , and used the tools: Git (for version control), Jenkins (to assist with continous \
                integration), and SonarQube (for ensuring clean code). I also assisted with some graphic \
                design work.",
                why: "The project was a part of the course, DECO2800. I chose the subject because I wanted \
                first hand experience in the software development lifecycle, and boy did I get it...",
                techs: "",
                github: "",
                demo: "",
                photo: "",
            },
            {
                name: "RGA website",
                desc: "A website designed to showcase the skills and work of the company.",
                date: "nov 2016 - feb 2017",
                imgurl: "../../img/logo.svg",
                what: "www.richardgrovesarchitects.com A website designed to showcase the skills and work \
                of the company.",
                how: "richardgrovesarchitects.com was written from scratch using HTML5, CSS, and JS(jquery). \
                The navbar was from bootstrap. SEO was performed, and I managed to integrate his business into \
                facebook and google.",
                why: "My dad needed a website made for his architecture firm. His old website was extremely \
                outdated and he had absolutely no digital presence. The website took over 40 hours to make \
                (most of which was redesigning parts he didn't like). I learnt a lot throughout the design \
                process, primarily, how important the requirements/prototyping portion of software development. \
                One miscommunication during that phase can lead to a lot of clean up down the road...",
                techs: "",
                github: "",
                demo: "www.richardgrovesarchitects.com",
                photo: "",
            },
            {
                name: "Tetris",
                desc: "A remake of the classic game tetris on an atmel 74HC chipset",
                date: "apr 2016",
                imgurl: "../../img/logo.svg",
                what: "A remake of the classic game tetris on an atmel 74HC chipset. The game contained \
                features such as high score tracking, 8 bit sound, and joystick support",
                how: "The game was written in C using the atmel studio IDE.",
                why: "The game was made as part of the assement for an embedded systems programming \
                course. A breadboard and chipset were given to us along with some basic boilerplate \
                code. From this we had a few weeks to implement as many features as we could.",
                techs: "the C programming language",
                github: "",
                demo: "",
                photo: "",
            },
        ];
    }
    getAllCards() {
        return this.codeCards;
    }
    getSampleCard() {
        return {
                name: "",
                desc: "",
                date: "",
                imgurl: "../../img/logo.svg",
                what: "",
                how: "",
                why: "",
                techs: "",
                github: "",
                demo: "",
                photo: "",
            }
    }

}
const codeStore = new CodeStore();

export default codeStore;