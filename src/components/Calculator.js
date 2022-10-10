import React, { Component, useState } from "react";

const isOperator = /[-+x/]/;

const Calculator = () => {
  const [currInput, setCurrInput] = useState("0");
  const [history, setHistory] = useState("");

  const handleOperator = (event) => {
    let currOperator = event.target.value;
    let retHistory = history;

    if (retHistory === "") {
      retHistory = "0";
    } else if (
      retHistory[retHistory.length - 1] === "." ||
      isOperator.test(currInput)
    ) {
      retHistory = retHistory.slice(0, retHistory.length - 1);
    }

    setHistory(retHistory + currOperator);
    setCurrInput(currOperator);
  };
  const handleNumber = (event) => {
    const currNum = event.target.value;

    if (isOperator.test(currInput)) {
      setHistory((prev) => prev + currNum);
      setCurrInput(currNum);
    } else if (currInput == "0") {
      if (currNum != "0") {
        setHistory((prev) => prev + currNum);
        setCurrInput(currNum);
      }
    } else {
      setHistory((prev) => prev + currNum);
      setCurrInput((prev) => prev + currNum);
    }
  };
  const handleDot = () => {
    if (!isOperator.test(currInput) && !currInput.includes(".")) {
      setHistory((prev) => prev + (prev == "" ? "0." : "."));
      setCurrInput((prev) => prev + ".");
    }
  };
  const clear = () => {
    setCurrInput("0");
    setHistory("");
  };
  const calculate = () => {
    let formula = history;
    if (isOperator.test(formula[formula.length - 1])) {
      formula = formula.slice(0, formula.length - 1);
    }
    let result = eval(formula.replace(/x/, "*"));
    setCurrInput(result);
    setHistory(result);
  };
  return (
    <div id="calculator">
      <div id="history">{history}</div>
      <div id="display">{currInput}</div>
      <button id="clear" onClick={clear}>
        AC
      </button>
      <button id="divide" value="/" onClick={handleOperator}>
        /
      </button>
      <button id="multiply" value="x" onClick={handleOperator}>
        x
      </button>
      <button id="subtract" value="-" onClick={handleOperator}>
        -
      </button>
      <button id="add" value="+" onClick={handleOperator}>
        +
      </button>
      <button id="equals" onClick={calculate}>
        =
      </button>
      <button id="decimal" onClick={handleDot}>
        .
      </button>
      <button id="zero" value="0" onClick={handleNumber}>
        0
      </button>
      <button id="one" value="1" onClick={handleNumber}>
        1
      </button>
      <button id="two" value="2" onClick={handleNumber}>
        2
      </button>
      <button id="three" value="3" onClick={handleNumber}>
        3
      </button>
      <button id="four" value="4" onClick={handleNumber}>
        4
      </button>
      <button id="five" value="5" onClick={handleNumber}>
        5
      </button>
      <button id="six" value="6" onClick={handleNumber}>
        6
      </button>
      <button id="seven" value="7" onClick={handleNumber}>
        7
      </button>
      <button id="eight" value="8" onClick={handleNumber}>
        8
      </button>
      <button id="nine" value="9" onClick={handleNumber}>
        9
      </button>
    </div>
  );
};
export default Calculator;
