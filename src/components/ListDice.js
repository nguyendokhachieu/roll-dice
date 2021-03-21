import { Component } from "react";

class ListDice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: [
        "./images/dice1.png",
        "./images/dice2@2x.png",
        "./images/dice3@2x.png",
        "./images/dice4@2x.png",
        "./images/dice5@2x.png",
        "./images/dice6@2x.png",
      ]
    };
  }

  render() {
      let url_1 = this.state.url[this.props.randomNumber[0]];
      let url_2 = this.state.url[this.props.randomNumber[1]];

    return (
      <div className="list-dice">
        <img className="dice-1" src={ url_1 } alt="" />
        <img id="dice-2" src={ url_2 } alt="" />
      </div>
    );
  }
}

export default ListDice;
