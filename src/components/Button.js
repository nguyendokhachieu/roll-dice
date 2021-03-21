import { Component } from "react";

class Button extends Component {

    onButtonClick = () => {
        this.props.onButtonClick();
    }

  render() {
    return <button onClick={ this.onButtonClick } className="roll-dice">Roll Dice</button>;
  }
}

export default Button;