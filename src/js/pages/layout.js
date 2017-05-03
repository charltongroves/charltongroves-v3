import React, {Component} from 'react';
import MaterialNav from '../components/MaterialNav';
import {Switch, Route} from 'react-router-dom'
import '../../css/Main.css';
import HomePage from './home'
import ArtPage from './art'
import CodePage from './code'
import ContactPage from './contact'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup' // ES6

class Layout extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "CG",
    }
  }
  render() {
    const bgStyle = {
      backgroundColor: "#53A6DB"
    }
    return (
      <div>
        <div className="bg" style={bgStyle}/>
        <MaterialNav currentRoute={this.props.location.pathname} title={this.state.title}/>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/code'  component={CodePage}/>
          <Route path='/code/:cardName'  component={CodePage}/>
          <Route path='/art'  component={ArtPage}/>
          <Route path='/contact' component={ContactPage}/>
        </Switch>
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Layout;
