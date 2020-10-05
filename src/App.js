import React, {Component} from 'react';
import './App.css';
import ResultComponent from "./components/ResultComponent";
import KeyboardComponent from "./components/KeyboardComponent";

class App extends Component {

  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "0" ) + ""
      });
    } catch(e) {
      this.setState({
        result: "Error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  save = () => {
    const element = document.createElement("a");
    const file = new Blob([this.state.result], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "result.txt";
    document.body.appendChild(element);
    element.click();
  };

  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else if (button === "Save to file") {
      this.save();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };


  render() {
    return(
        <div>
          <div className="calculator">
            <ResultComponent  result={this.state.result}/>
            <KeyboardComponent onClick={this.onClick}/>
          </div>
        </div>
    );
  }



}

export default App;