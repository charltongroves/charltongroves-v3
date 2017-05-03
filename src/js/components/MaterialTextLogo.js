import React from 'react';
import FontIcon from 'material-ui/FontIcon';
export class MaterialLogo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.icon) {
            const styles = {
                backgroundColor: this.props.color
            }
            return (
                <FontIcon className="material-icons gen-logo icon-logo" style={styles}>{this.props.icon}</FontIcon>
            )
        } else {
            const styles = {
                backgroundColor: this.props.color
            }
            const text = this.props.text.substring(0,3)
            return (
                <p id="icon" style={{overflow: "hidden"}} className="gen-logo text-logo"> {text} </p>
                )
        }
    }
}

export default MaterialLogo