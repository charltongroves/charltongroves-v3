import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import MaterialTabs from './Tabs.js'

class MaterialNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
      currentUrl: props.currentUrl
    };
  }
  handleToggle = () => this.setState({
    navOpen: !this.state.navOpen
  });

  handleClose = () => this.setState({navOpen: false});
  render() {
    const transp = {
      backgroundColor: 'rgba(0,0,0,0)',
      maxWidth: "1200px",
      margin: "0 auto"
    }
    const iconStyle = {
      color: "#f00"
    }
    const closeIconStyle = {
      padding: "12px 12px 12px 0"
    }
    return (
      <div>
        <AppBar
          style={transp}
          onLeftIconButtonTouchTap={this.handleToggle}
          title={this.props.title}
          iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
          iconElementRight={<MaterialTabs currentUrl={this.state.currentUrl}/>}
          iconStyleLeft={iconStyle}
          zDepth={0}/>
          
        <Drawer
          docked={false}
          width={200}
          open={this.state.navOpen}
          onRequestChange={(open) => this.setState({open})}>
          <MenuItem onTouchTap={this.handleClose}><IconButton style={closeIconStyle}><NavigationClose /></IconButton></MenuItem>
          <Link to={'/'}>
            <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
          </Link>
          <Link to={'/code'}>
            <MenuItem onTouchTap={this.handleClose}>Code</MenuItem>
          </Link>
          <Link to={'/art'}>
            <MenuItem onTouchTap={this.handleClose}>Art</MenuItem>
          </Link>
          <Link to={'/contact'}>
            <MenuItem onTouchTap={this.handleClose}>Contact</MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default MaterialNav;