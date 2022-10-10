import React, { Component } from "react";

const isOperator = /[-+x/]/;

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currInput: "0",
      history: "",
    };

    this.handleOperator = this.handleOperator.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleDot = this.handleDot.bind(this);
    this.clear = this.clear.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  handleOperator(event) {
    let currOperator = event.target.value;
    let retHistory = this.state.history;

    if (retHistory === "") {
      retHistory = "0";
    } else if (
      retHistory[retHistory.length - 1] === "." ||
      isOperator.test(this.state.currInput)
    ) {
      retHistory = retHistory.slice(0, retHistory.length - 1);
    }

    this.setState({
      currInput: currOperator,
      history: retHistory + currOperator,
    });
  }
  handleNumber(event) {
    const currInput = this.state.currInput;
    const currNum = event.target.value;

    if (isOperator.test(currInput)) {
      this.setState({
        currInput: currNum,
        history: this.state.history + currNum,
      });
    } else if (currInput == "0") {
      if (currNum != "0") {
        this.setState({
          currInput: currNum,
          history: this.state.history + currNum,
        });
      }
    } else {
      this.setState({
        currInput: currInput + currNum,
        history: this.state.history + currNum,
      });
    }
  }
  handleDot() {
    const currInput = this.state.currInput;
    if (!isOperator.test(currInput) && !currInput.includes(".")) {
      this.setState({
        currInput: currInput + ".",
        history: this.state.history + (this.state.history == "" ? "0." : "."),
      });
    }
  }
  clear() {
    this.setState({
      currInput: "0",
      history: "",
    });
  }
  calculate() {
    let formula = this.state.history;
    if (isOperator.test(formula[formula.length - 1])) {
      formula = formula.slice(0, formula.length - 1);
    }
    let result = eval(formula.replace(/x/, "*"));
    this.setState({
      currInput: result,
      history: result,
    });
  }
  render() {
    return (
      <div id="calculator">
        <div id="history">{this.state.history}</div>
        <div id="display">{this.state.currInput}</div>
        <button id="clear" onClick={this.clear}>
          AC
        </button>
        <button id="divide" value="/" onClick={this.handleOperator}>
          /
        </button>
        <button id="multiply" value="x" onClick={this.handleOperator}>
          x
        </button>
        <button id="subtract" value="-" onClick={this.handleOperator}>
          -
        </button>
        <button id="add" value="+" onClick={this.handleOperator}>
          +
        </button>
        <button id="equals" onClick={this.calculate}>
          =
        </button>
        <button id="decimal" onClick={this.handleDot}>
          .
        </button>
        <button id="zero" value="0" onClick={this.handleNumber}>
          0
        </button>
        <button id="one" value="1" onClick={this.handleNumber}>
          1
        </button>
        <button id="two" value="2" onClick={this.handleNumber}>
          2
        </button>
        <button id="three" value="3" onClick={this.handleNumber}>
          3
        </button>
        <button id="four" value="4" onClick={this.handleNumber}>
          4
        </button>
        <button id="five" value="5" onClick={this.handleNumber}>
          5
        </button>
        <button id="six" value="6" onClick={this.handleNumber}>
          6
        </button>
        <button id="seven" value="7" onClick={this.handleNumber}>
          7
        </button>
        <button id="eight" value="8" onClick={this.handleNumber}>
          8
        </button>
        <button id="nine" value="9" onClick={this.handleNumber}>
          9
        </button>
      </div>
    );
  }
}
export default Calculator;
