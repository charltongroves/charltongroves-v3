import React, {Component} from 'react';

class CodeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
        console.log(props)
    }
      componentWillReceiveProps(props) {
    this.setState({name: this.props.name});
    console.log("SCREAM")
  }
    render () {
        return (
        <div>
            <h1> HOWDY {this.state.name} </h1>
            </div>);
    }
}
export default CodeInfo
        