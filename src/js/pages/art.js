import React, { Component } from "react";
import ArtStore from "../stores/ArtStore";
import ImageCarousel from "../components/ImageCarousel";
import "../../css/art.css";
class Art extends Component {
  constructor(props) {
    super(props);
    this.state = {
      art: ArtStore.getAllArt(),
    };
  }
  render() {
    const styles = {
      h1: {
        color: "#fff",
        fontWeight: 300,
      },
      h2: {
        color: "#fff",
        fontWeight: 300,
      },
      textCont: {
        flex: "0 0 100rem",
        textAlign: "center",
        maxWidth: "600px",
        margin: "2rem auto 0 auto",
        padding: "0 1rem",
        clear: "both",
      },
    };
    return (
      <div className="easeIn">
        <div style={styles.textCont}>
          <h1 style={styles.h1}>I make art!</h1>
          <h3 style={styles.h2}>
            I'm a professional oil painter (3 Exhibitions, 1 Solo), I absolutely
            love visual art and have practiced it my entire life
          </h3>
          <h3 style={styles.h2}>
            Head to my instagram to see my art portfolio!
          </h3>

          <h1 style={styles.h1}>
            <a href="https://instagram.com/charlie_grc">My Instagram</a>
          </h1>
          <h1 style={styles.h1}>
            <a href="art.charltongroves.com">Between Two Thoughs Exhibition</a>
          </h1>
        </div>
      </div>
    );
  }
}

export default Art;
