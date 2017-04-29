import React, { Component } from 'react';
import Island from '../../img/island.svg';
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
        fontSize: "5rem",
        color: "#fff",
        fontWeight: "100"
      },
      mastHead : {
        width: "100%",
      }
    }
    return (
      <div style={styles.container}>
        <h1 style={styles.heroText} > Hello, I'm Charlie </h1>
        <img style={styles.mastHead} src={Island} />
      </div>
    );
  }
}

export default Home;
