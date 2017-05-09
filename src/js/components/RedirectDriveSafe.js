import React, {Component} from 'react';

class Redirect extends Component {
    componentWillMount() {
        window.location.replace("http://projects.charltongroves.com/drivesafe")
    }
}

export default Redirect