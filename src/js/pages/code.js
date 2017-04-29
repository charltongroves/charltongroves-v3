import React, {Component} from 'react';
import CodeStore from "../stores/CodeStore"
import '../../css/code.css';
import CodeCard from "../components/CodeCard.js"
class Code extends Component {
  constructor() {
    super();
    this.state = {
      codeCards: CodeStore.getAllCards()
    }
  }
  render() {
    const cardStyle = {
      margin: "12px"
    }
    const containerStyle = {
      display: "flex",
      flexWrap: "wrap",
      margin: "0 auto",
      justifyContent: "space-around",
      maxWidth: "1000px"
      
    }
    const CodeCardComponents = this.state.codeCards.map((codeCard) => {
        return <CodeCard style={cardStyle} key={codeCard.id} {...codeCard}/>;
    });
    return (
      <div style={containerStyle}>
        {CodeCardComponents}
      </div>
    );
  }
}

export default Code;