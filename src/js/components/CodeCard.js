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

class CodeCard extends Component {
    constructor(props) {
        super();
        console.log(props)
    }
    render() {
        const {name, desc, imgurl} = this.props
        return (
            <Card>
                <CardMedia
                    overlay={< CardTitle title = "Overlay title" subtitle = "Overlay subtitle" />}>
                    <img src={imgurl}/>
                </CardMedia>
                <CardTitle title={name} subtitle={desc}/>
                <CardText>
                </CardText>
                <CardActions>
                    <FlatButton label="expand"/>
                    <FlatButton label="Action2"/>
                </CardActions>
            </Card>
        )
    }
};

export default CodeCard;