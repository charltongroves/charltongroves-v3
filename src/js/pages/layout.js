import React, { Component } from "react";
import MaterialNav from "../components/MaterialNav";
import { Switch, Route } from "react-router-dom";
import "../../css/Main.css";
import HomePage from "./home";
import ArtPage from "./art";
import PortfolioPage from "./portfolio";
import RedirectDriveSafe from "../components/RedirectDriveSafe";
import RedirectArtPage from "../components/RedirectArtPage";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "CG",
    };
  }
  render() {
    return (
      <div className="bg">
        <MaterialNav
          currentRoute={this.props.location.pathname}
          title={this.state.title}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route path="/portfolio/:cardName" component={PortfolioPage} />
          <Route path="/art" component={RedirectArtPage} />
          <Route path="/prog/drivesafe" component={RedirectDriveSafe} />
        </Switch>
      </div>
    );
  }
}

export default Layout;
