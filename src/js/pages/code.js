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
    console.log(this.props)
    console.log(this.state)
  }
  getActiveCodeCard() {
    for (let card of this.state.codeCards) {
      if (card.name == this.state.cardActiveName) {
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
      ? <CodeInfo {...this.getActiveCodeCard()}/>
      : null
    const disableScroll = (CardOverlay)
      ? {
        height: "90vh",
        overflowY: "hidden"
      }
      : {}
    const containerStyle = {
      display: "flex",
      flexWrap: "wrap",
      margin: "0 auto",
      justifyContent: "space-around",
      maxWidth: "1000px"
    }
    const currentRoute = "/code"
    const CodeCardComponents = this
      .state
      .codeCards
      .map((codeCard) => {
        return (
          <Link to={currentRoute + "/" + codeCard.name} onClick={this.handleOnLinkClick}>
            <CodeCard style={cardStyle} key={codeCard.name} {...codeCard}/>
          </Link>
        );
      });

    return (
      <div
        className="easeIn"
        style={{
        ...containerStyle,
        ...disableScroll
      }}>
        {CardOverlay}
        {CodeCardComponents}
      </div>
    );
  }
}

export default Code;