import React, {Component} from 'react';
import DesignStore from "../stores/DesignStore"
import ImageCarousel from '../components/ImageCarousel'
import '../../css/design.css';
import DesignCard from "../components/DesignCard.js"
import DesignInfo from "../components/DesignInfo.js"
import {Link} from 'react-router-dom';
class Design extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designCards: DesignStore.getAllCards(),
      cardActive: (props.match.params.cardName)
        ? true
        : false,
      cardActiveName: props.match.params.cardName
    }
    this.props = props
  }
  getActiveDesignCard() {
    for (let card of this.state.designCards) {
      if (card.name === this.state.cardActiveName) {
        return card
      }
    }
    return {}
  }
  componentWillReceiveProps(props) {
    this.setState({cardActive: true, cardActiveName: props.match.params.cardName});
  }
  render() {
    const cardStyle = {
      margin: "12px"
    }
    const CardOverlayHidden = (this.state.cardActiveName)
      ? "card-overlay card-overlay-show"
      : "card-overlay card-overlay-hide"
    const DesignInfoProps = (this.state.cardActiveName)
      ? this.getActiveDesignCard()
      : {}
    const containerStyle = {
      display: "flex",
      flexWrap: "wrap",
      margin: "1rem auto",
      justifyContent: "center",
      maxWidth: "1000px"
    }
    const currentRoute = "/design"
    console.log(this.state)
    const DesignCardComponents = this
      .state
      .designCards
      .map((designCard) => {
        return (
          <Link
            key={designCard.name}
            to={currentRoute + "/" + designCard.name}
            onClick={this.handleOnLinkClick}>
            <DesignCard style={cardStyle} key={designCard.name} {...designCard}/>
          </Link>
        );
      });
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
        padding: "0 1rem",
        margin: "2rem auto 0 auto",
        clear: "both"
      },
      newLine: {
        width: "100%"
      }
    }
    return (
      <div className="easeIn">
        <div className={CardOverlayHidden}>
          <DesignInfo info={DesignInfoProps}/>
        </div>
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
        <div style={containerStyle} className="design-card-wrap">
          {DesignCardComponents}
        </div>

      </div>
    );
  }
}

export default Design;