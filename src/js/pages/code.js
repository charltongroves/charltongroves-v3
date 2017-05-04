import React, {Component} from 'react';
import CodeStore from "../stores/CodeStore"
import '../../css/code.css';
import CodeCard from "../components/CodeCard.js"
import CodeInfo from "../components/CodeInfo.js"
import {Link} from 'react-router-dom';
class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeCards: CodeStore.getAllCards(),
      cardActive: (props.match.params.cardName)
        ? true
        : false,
      cardActiveName: props.match.params.cardName
    }
    this.props = props
  }
  getActiveCodeCard() {
    for (let card of this.state.codeCards) {
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
    const CardOverlay = (this.state.cardActiveName)
      ? <CodeInfo info={this.getActiveCodeCard()}/>
      : null
    const disableScroll = (CardOverlay)
      ? {
      }
      : {}
    const containerStyle = {
      display: "flex",
      flexWrap: "wrap",
      margin: "1rem auto",
      justifyContent: "center",
      maxWidth: "1000px"
    }
    const currentRoute = "/code"
    const CodeCardComponents = this
      .state
      .codeCards
      .map((codeCard) => {
        return (
          <Link key={codeCard.name} to={currentRoute + "/" + codeCard.name} onClick={this.handleOnLinkClick}>
            <CodeCard style={cardStyle} key={codeCard.name} {...codeCard}/>
          </Link>
        );
      });
    const styles = {
      h1: {
        color: "#fff",
        fontWeight: 300
      },
      h2 :{
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
      },
    }
    return (
      <div
        className="easeIn"
       >
        {CardOverlay}
        <div style={styles.newLine}>
        <div style={styles.textCont}>
            <h1 style={styles.h1}> I love programming </h1>
            <h3 style={styles.h2}> I have experience in front end engineering, backend engineering, data analysis, systems programming, and large scale OOP programming </h3>
            <p style={styles.h2}> Take a look at some of my recent projects below </p>
        </div>
        </div>
        <div  style={{
        ...containerStyle,
        ...disableScroll
      }} className="code-card-wrap" >
        {CodeCardComponents}
        </div>
      </div>
    );
  }
}

export default Code;