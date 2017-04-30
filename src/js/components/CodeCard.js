import React, {Component} from 'react';
import {
    Card,
    CardMedia,
    CardTitle,
} from 'material-ui/Card';
import Easle from '../../img/easle.svg';
import transitions from 'material-ui/styles/transitions';


class CodeCard extends Component {
    constructor(props) {
        super();
        console.log(props)
    }
    handleMouseEnter = () => {
        this.setState({zDepth: 4});
    };

    handleMouseLeave = () => {
        this.setState({zDepth: 0});
    };
    render() {
        const {name, desc} = this.props
        const styles = {
            paper: {
                transition: transitions.easeOut(),
                width: '300px'
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
            </Card>
        )
    }
};

export default CodeCard;