import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom'
class MaterialNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };
  }
  handleToggle = () => this.setState({
    navOpen: !this.state.navOpen
  });

  handleClose = () => this.setState({navOpen: false});
  render() {
    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <Drawer
          docked={false}
          width={200}
          open={this.state.navOpen}
          onRequestChange={(open) => this.setState({open})}>
          <Link to={'/'}><MenuItem onTouchTap={this.handleClose}>Home</MenuItem></Link>
          <Link to={'/code'}><MenuItem onTouchTap={this.handleClose}>Code</MenuItem></Link>
          <Link to={'/art'}><MenuItem onTouchTap={this.handleClose}>Art</MenuItem></Link>
          <Link to={'/contact'}><MenuItem onTouchTap={this.handleClose}>Contact</MenuItem></Link>
        </Drawer>
      </div>
    );
  }
}

export default MaterialNav;