import React, {Component} from 'react';
import MaterialNav from '../components/MaterialNav';
import {Switch, Route} from 'react-router-dom'
import '../../css/Main.css';
import HomePage from './home'
import ArtPage from './art'
import CodePage from './code'
import DesignPage from './design'

class Layout extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "CG",
    }
  }
  render() {
    return (
      <div className="bg">
        <MaterialNav currentRoute={this.props.location.pathname} title={this.state.title}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/code'  component={CodePage}/>
          <Route path='/code/:cardName'  component={CodePage}/>
          <Route path='/art'  component={ArtPage}/>
          <Route path='/design' component={DesignPage}/>
        </Switch>
      </div>
    );
  }
}

export default Layout;
