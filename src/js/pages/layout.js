import React, {Component} from 'react';
import MaterialNav from '../components/MaterialNav';
import {Switch, Route} from 'react-router-dom'
import '../../css/Main.css';
import HomePage from './home'
import ArtPage from './art'
import CodePage from './code'
import ContactPage from './contact'
class Layout extends Component {
  constructor () {
    super();
    this.state = {
      title: "CG"
    }
  }
  render() {
    const bgStyle = {
      backgroundColor: "#2196F3"
    }
    return (
      <div>
        <div className="bg" style={bgStyle}/>
        <MaterialNav title={this.state.title}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/code'  component={CodePage}/>
          <Route path='/art'  component={ArtPage}/>
          <Route path='/contact' component={ContactPage}/>
        </Switch>
      </div>
    );
  }
}

export default Layout;
