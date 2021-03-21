import "./App.css";
import { Component } from "react";
import Logo from "./components/Logo";
import ListDice from "./components/ListDice";
import Button from "./components/Button";

class App extends Component {

   constructor(props) {
     super(props);

     this.state = {
       randomNumber: [0, 1]
     }
   }

  handleButtonClick = () => {
    let randomNumber_1 = Math.floor(Math.random() * 6);
    let randomNumber_2 = Math.floor(Math.random() * 6);

    this.setState({
      randomNumber: [randomNumber_1, randomNumber_2]
    })
  }

  render() {
    return (
      <div className="container">
        <Logo></Logo>
        <ListDice randomNumber={ this.state.randomNumber }></ListDice>
        <Button onButtonClick={ this.handleButtonClick }></Button>
      </div>
    );
  }
}

export default App;
