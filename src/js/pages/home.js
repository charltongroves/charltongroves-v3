import React, { Component } from 'react';
import ParalaxMast from '../components/ParalaxMast.js'
import '../../css/home.css';
class Home extends Component {
  render() {
    const styles = {
      container : {
        width: "100vw",
        height: "100vh",
        margin: "0 auto",
        textAlign: "center",
        background: "linear-gradient(#53A6DB, #fff)"
      },
      heroText: {
        fontSize: "15rem",
        color: "rgba(255,255,255,0.8)",
        fontWeight: "500"
      },
      mastHead : {
        width: "100%",
      }
    }
    return (
      <div className="easeIn" style={styles.container}>
        <h1 className="heroText" ></h1>
        <ParalaxMast />
      </div>
    );
  }
}

export default Home;
