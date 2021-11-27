import React, { Component } from "react";

class Redirect extends Component {
  componentWillMount() {
    window.location.replace("http://art.charltongroves.com");
  }
}

export default Redirect;
