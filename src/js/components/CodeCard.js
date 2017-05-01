import React, {Component} from 'react';
import {
    Card,
    CardMedia,
    CardTitle,
    CardText,
} from 'material-ui/Card';
import Easle from '../../img/easle.svg';
import transitions from 'material-ui/styles/transitions';


class CodeCard extends Component {
    constructor(props) {
        super();
    }
    handleMouseEnter = () => {
        this.setState({zDepth: 4});
    };

    handleMouseLeave = () => {
        this.setState({zDepth: 0});
    };
    render() {
        const {name, desc, date} = this.props
        const styles = {
            paper: {
                transition: transitions.easeOut(),
                width: '300px'
            },
            date: {
                color: "rgba(0,0,0,0.6)",
                padding: "0px 16px 8px 16px",
                fontSize: "0.8rem"
            }
        }
        return (
            <Card className="code-card"
                onMouseOver={this.handleMouseEnter}
                onMouseOut={this.handleMouseLeave}
                style={{
                ...this.props.style,
                ...styles.paper
            }}>
                <CardMedia>
                    <img src={Easle} alt="easle"/>
                </CardMedia>
                <CardTitle title={name} subtitle={desc}/>
                <CardText style={styles.date}>{date}</CardText>
            </Card>
        )
    }
};

export default CodeCard;