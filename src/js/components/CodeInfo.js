import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import {Link} from 'react-router-dom'
class CodeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: this.props.info
        }
        console.log(props)
    }
    componentWillReceiveProps(props) {
        this.setState({name: this.props.name});
        console.log("SCREAM")
    }
    render() {

        const styles = {
            cont: {
                width: "100%",
                height: "100%",
                position: "fixed",
                zIndex: 1500,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                overflowY: "scroll"
            },
            paper: {
                width: "90vw",
                maxWidth: "1000px",
                margin: " 4rem auto",
                textAlign: 'left',
                position: 'relative',
                zIndex: "1400",
                padding: "2rem"
            },
            greyOut: {
                position: "fixed",
                width: "100%",
                height: "100%",
                left: "0px",
                top: "0px",
                zIndex: "1300",
                backgroundColor: "rgba(0,0,0,0.54)"
            },
            mediumButton: {
                position: 'absolute',
                top: 0,
                right: 0,
                width: 72,
                height: 72,
                padding: 16
            },
            mediumIcon: {
                width: 36,
                height: 36
            },
            title: {
                fontSize: "2rem"
            },
            heading: {
                fontSize: "1.5rem"
            },
            p: {},
            contentCont: {
                display: "flex",
                flexWrap: "wrap",
                width: "100%"
            },
            textCont: {
                maxWidth: "100%",
                flex: "2 0 20rem",
                marginRight: "1rem"
            },
            linksCont: {
                flex: "1 0 0",
            },
            textWrap: {
                maxWidth: "300px",
                wordWrap: "break-word",
            },
            img: {
                width: "100%"
            }

        }
        const info = this.state.info
        const demo = (info.demo)
            ? <div style={styles.textWrap}>
                    <h3>Demo</h3>
                    <a href={info.demo}>{info.demo}
                    </a>
                </div>
            : null
        return (
            <div className="easeIn" style={styles.cont}>
                <Link to="/code"><div style={styles.greyOut}/></Link>
                <Paper style={styles.paper} zDepth={5} rounded={false}>
                    <Link to="/code">
                        <IconButton iconStyle={styles.mediumIcon} style={styles.mediumButton}>
                            <CloseIcon/>
                        </IconButton>
                    </Link>
                    <div style={styles.contentCont}>
                        <div style={styles.textCont}>
                            <h1 style={styles.title}>{info.name}</h1>
                            <img style={styles.img} src={info.imgurl} alt={info.name} />
                            <h2 style={styles.heading}>What
                            </h2>
                            <p style={styles.p}>{info.what}</p>
                            <h2 style={styles.heading}>How
                            </h2>
                            <p style={styles.p}>{info.how}</p>
                            <h2 style={styles.heading}>Why
                            </h2>
                            <p style={styles.p}>{info.why}</p>
                        </div>
                        <div style={styles.linksCont}>
                            <h3 style={styles.textWrap}>
                                Techs/Tools
                            </h3>
                            <p style={styles.textWrap}>
                                {info.techs}
                            </p>
                            {demo}
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}
export default CodeInfo
