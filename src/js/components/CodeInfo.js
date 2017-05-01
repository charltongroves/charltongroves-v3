import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import {Link} from 'react-router-dom'
class CodeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: this.props
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
                minHeight: "90vh",
                margin: "auto",
                textAlign: 'center',
                position: 'relative',
                zIndex: "1400",
                marginTop: "4rem"
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
            }
        }
        const info = this.state.info
        return (
            <div className="easeIn" style={styles.cont}>
                <div style={styles.greyOut}/>
                <Paper style={styles.paper} zDepth={5} rounded={false}>
                    <Link to="/code">
                    <IconButton
                        iconStyle= {styles.mediumIcon}
                        style= {styles.mediumButton}>
                        <CloseIcon/>
                    </IconButton>
                    </Link>
                    <h1>{info.name}</h1>
                    <h1>
                        {info.desc}
                    </h1>
                </Paper>
            </div>
        );
    }
}
export default CodeInfo
