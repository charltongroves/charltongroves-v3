import React, { Component } from 'react';
import CodeStore from "../stores/CodeStore"
import '../../css/code.css';
import CodeCard from "../components/CodeCard.js"
class Code extends Component {
  constructor() {
    super();
    this.state = {
      codeCards: CodeStore.getAllCards(),
    }
  }
  render() {
    return (
      <div className="code-container">
        <CodeCard name="memeBoy" desc="Lmao" imgurl="../../img/logo.svg" />
      </div>
    );
  }
}

export default Code;