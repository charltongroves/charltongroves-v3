import React, {Component} from 'react';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Easle from '../../img/easle.svg';
import spacing from 'material-ui/styles/spacing';
import transitions from 'material-ui/styles/transitions';
import typography from 'material-ui/styles/typography';
import {grey200} from 'material-ui/styles/colors';

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
        const {name, desc, imgurl} = this.props
        const desktopGutter = spacing.desktopGutter;
        const desktopKeylineIncrement = spacing.desktopKeylineIncrement;
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
                    <img src={Easle}/>
                </CardMedia>
                <CardTitle title={name} subtitle={desc}/>
            </Card>
        )
    }
};

export default CodeCard;