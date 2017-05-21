import React, {Component} from 'react';
import DesignStore from "../stores/DesignStore"
import ImageCarousel from '../components/ImageCarousel'
import '../../css/art.css';
class Design extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: DesignStore.getAllWork()
    }
  }
  render() {
    const styles = {
      h1: {
        color: "#fff",
        fontWeight: 300
      },
      h2: {
        color: "#fff",
        fontWeight: 300
      },
      textCont: {
        flex: "0 0 100rem",
        textAlign: "center",
        maxWidth: "600px",
        margin: "2rem auto 0 auto",
        padding: "0 1rem",
        clear: "both"
      }
    }
    return (
      <div className="easeIn">
        <div style={styles.textCont}>
          <h1 style={styles.h1}>
            I'm teaching myself design
          </h1>
          <h3 style={styles.h2}>
            My love of art and problem solving combine beautifully with design. I want the
            software I make to be enjoyable to use. So for every project I undertake, I
            apply what i've learnt so far in design with my skills as a visual artist to
            produce insightful paper prototypes.
          </h3>
          <p style={styles.h2}>
            Take a look at some of my design processes below.
          </p>
        </div>

        <ImageCarousel photos={this.state.works}/>
      </div>
    );
  }
}

export default Design;