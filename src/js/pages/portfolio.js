import React, { Component } from "react";
import PortfolioStore from "../stores/PortfolioStore";
import "../../css/portfolio.css";
import PortfolioCard from "../components/PortfolioCard.js";
import PortfolioInfo from "../components/PortfolioInfo.js";
import { Link } from "react-router-dom";
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioCards: PortfolioStore.getAllCards(),
      cardActive: props.match.params.cardName ? true : false,
      cardActiveName: props.match.params.cardName,
    };
    this.props = props;
  }
  getActivePortfolioCard() {
    for (let card of this.state.portfolioCards) {
      if (card.name === this.state.cardActiveName) {
        return card;
      }
    }
    return {};
  }
  componentWillReceiveProps(props) {
    this.setState({
      cardActive: true,
      cardActiveName: props.match.params.cardName,
    });
  }
  render() {
    const cardStyle = {
      margin: "12px",
    };
    const CardOverlayHidden = this.state.cardActiveName
      ? "card-overlay card-overlay-show"
      : "card-overlay card-overlay-hide";
    const PortfolioInfoProps = this.state.cardActiveName
      ? this.getActivePortfolioCard()
      : {};
    const containerStyle = {
      display: "flex",
      flexWrap: "wrap",
      margin: "1rem auto",
      justifyContent: "center",
      maxWidth: "1000px",
    };
    const currentRoute = "/portfolio";
    const PortfolioCardComponents = this.state.portfolioCards.map(
      (portfolioCard) => {
        return (
          <Link
            key={portfolioCard.name}
            to={currentRoute + "/" + portfolioCard.name}
            onClick={this.handleOnLinkClick}
          >
            <PortfolioCard
              style={cardStyle}
              key={portfolioCard.name}
              {...portfolioCard}
            />
          </Link>
        );
      }
    );
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
        padding: "0 1rem",
        margin: "2rem auto 0 auto",
        clear: "both",
      },
      newLine: {
        width: "100%",
      },
    };
    return (
      <div className="easeIn">
        <div className={CardOverlayHidden}>
          <PortfolioInfo info={PortfolioInfoProps} />
        </div>
        <div style={styles.newLine}>
          <div style={styles.textCont}>
            <h1 style={styles.h1}>Portfolio</h1>
            <p style={styles.h2}>
              Most of my work is behind IP so I can't publish, but these are
              some things I do own outright and can share!
            </p>
          </div>
        </div>
        <div style={containerStyle} className="portfolio-card-wrap">
          {PortfolioCardComponents}
        </div>
      </div>
    );
  }
}

export default Portfolio;
