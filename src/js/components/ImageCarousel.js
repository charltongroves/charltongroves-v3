import React, { Component } from 'react'
import Slider from 'react-slick'
import Easle from '../../img/easle.svg'
import NextIcon from 'material-ui/svg-icons/image/navigate-next';
import BeforeIcon from 'material-ui/svg-icons/image/navigate-before';
import IconButton from 'material-ui/IconButton';


function SampleNextArrow(props) {
  const {className, onClick} = props
  const styles = {
    icon: {
      width: "48px",
      height: "48px",
      color: "rgba(255,255,255,1)"
    },
    button: {
      width: 96,
      height: 96,
      padding: 24,
    }
  }
  return (
    <div
      className={"arrow arrow-next"}
      onClick={onClick}
    ><IconButton iconStyle={styles.icon} style={styles.button}><NextIcon/></IconButton></div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  const styles = {
    icon: {
      width: "48px",
      height: "48px",
      color: "rgba(255,255,255,1)"
    },
    button: {
      width: 96,
      height: 96,
      padding: 24,
    }
  }
  return (
    <div
      className={"arrow arrow-prev"}
      onClick={onClick}
    ><IconButton iconStyle={styles.icon} style={styles.button}><BeforeIcon/></IconButton></div>
  );
}

export default class ImageCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    const styles= {
      img: {
        maxWidth: "300px",
        margin: "0 auto"
      }
    }
    return (
      <div style={this.props.style}>
        <h2> Lazy Load</h2>
        <Slider {...settings}>
          <div><img style={styles.img} src={Easle} /></div>
          <div><img style={styles.img} src={Easle} /></div>
          <div><img style={styles.img} src={Easle} /></div>
          <div><img style={styles.img} src={Easle} /></div>
        </Slider>
      </div>
    );
  }
}