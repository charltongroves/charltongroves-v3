import React, { Component } from 'react';
import ParalaxMast from '../components/ParalaxMast.js'
import '../../css/home.css';
class Home extends Component {
  render() {
    const styles = {
      container : {
        maxWidth:"1200px",
        margin: "0 auto",
        textAlign: "center",
      },
      heroText: {
        fontSize: "20rem",
        color: "#fff",
        fontWeight: "100"
      },
      mastHead : {
        width: "100%",
      }
    }
    return (
      <div className="easeIn" style={styles.container}>
        <h1 style={styles.heroText} > Hello</h1>
        <ParalaxMast />
      </div>
    );
  }
}

export default Home;
