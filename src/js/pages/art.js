import React, { Component } from 'react';
import ImageCarousel from '../components/ImageCarousel'
import '../../css/art.css';
class Art extends Component {
  render() {
    const styles = {
      carouselCont: {
        width: "900px",
        margin: "0 auto"
      }
    }
    return (
      <div>
        <ImageCarousel style={styles.carouselCont} />
      </div>
    );
  }
}

export default Art;