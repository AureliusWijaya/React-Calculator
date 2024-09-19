// @ts-ignore
// tslint:disable:no-unused-variable
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import History from "../components/History";
import Display from "../components/Display";

const Home = () => {
  const [value, setValue] = useState<string>("0");
  const [previousValue, setPreviousValue] = useState<string>("");
  const [operator, setOperator] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const handleNumber = (number: string) => {
    if (value === "0") {
      setValue(number);
    } else {
      setValue(value + number);
    }
  };

  const handleOperation = (operation: string) => {
    if (operator) {
      return;
    }
    setOperator(operation);
    setPreviousValue(value);
    setValue("0");
  };

  const Calc = (nextOperator: string) => {
    if (!operator || previousValue === "") {
      return;
    }

    let result = 0;
    switch (operator) {
      case "+":
        result = parseFloat(previousValue) + parseFloat(value);
        break;
      case "-":
        result = parseFloat(previousValue) - parseFloat(value);
        break;
      case "*":
        result = parseFloat(previousValue) * parseFloat(value);
        break;
      case "/":
        if (parseFloat(value) === 0) {
          setValue("Error");
          setTimeout(clear, 1000);
          return;
        }
        result = parseFloat(previousValue) / parseFloat(value);
        break;
    }
    if (!isFinite(result)) {
      setValue("Err");
      setTimeout(clear, 1000);
      return;
    }
    setHistory([...history, `${result}`]);
    setOperator(null);
    setPreviousValue("0");
    setValue(`0`);
  };

  const clear = () => {
    setValue("0");
    setPreviousValue("");
    setOperator(null);
  };

  const deleteLast = () => {
    if (value !== "0" && value.length > 1) {
      setValue(value.slice(0, value.length - 1));
    } else if (value !== "0" && value.length === 1) {
      setValue("0");
    } else if (value === "0" && operator) {
      setOperator(null);
      setValue(previousValue);
      setPreviousValue("");
    }
  };

  return (
    <>
      <h1 className="text-4xl text-orange-400 my-15">Kalkulator</h1>
      <div className="flex bg-gray-500 rounded-lg flex-col p-5 mt-10">
        <History history={history} />
        <div className="flex-grow mb:hidden"></div>
        <Display
          value={value}
          previousValue={previousValue}
          operator={operator}
        />
      </div>

      <div className="table-c">
        <div className="calc-number calc-button" onClick={clear}>
          C
        </div>

        <div className="calc-number calc-button" onClick={deleteLast}>
          DEL
        </div>

        <Link
          to="/support"
          className="bg-yellow-800 calc-button 
  rounded-full"
        >
          ?
        </Link>

        <div
          className="calc-button-op calc-operator"
          onClick={() => handleOperation("/")}
        >
          /
        </div>

        <div
          className="calc-number calc-button"
          onClick={() => handleNumber("7")}
        >
          7
        </div>

        <div
          className="calc-number calc-button"
          onClick={() => handleNumber("8")}
        >
          8
        </div>

        <div
          className="calc-number calc-button"
          onClick={() => handleNumber("9")}
        >
          9
        </div>

        <div
          className="calc-button-op calc-operator"
          onClick={() => handleOperation("*")}
        >
          *
        </div>

        <div
          className="calc-number calc-button"
          onClick={() => handleNumber("4")}
        >
          4
        </div>

        <div
          className="calc-number calc-button"
          onClick={() => handleNumber("5")}
        >
          5
        </div>

        <div
          className="calc-number calc-button"
          onClick={() => handleNumber("6")}
        >
          6
        </div>

        <div
          className="calc-button-op calc-operator"
          onClick={() => handleOperation("-")}
        >
          -
        </div>

        <div
          className="calc-number calc-button"
          onClick={() => handleNumber("1")}
        >
          1
        </div>

        <div
          className="calc-number calc-button"
          onClick={() => handleNumber("2")}
        >
          2
        </div>

        <div
          className="calc-number calc-button"
          onClick={() => handleNumber("3")}
        >
          3
        </div>

        <div
          className="calc-button-op calc-operator"
          onClick={() => handleOperation("+")}
        >
          +
        </div>

        <div
          className="bg-gray-400 calc-bot hover:bg-gray-500"
          onClick={() => handleNumber("0")}
        >
          0
        </div>

        <div
          className="bg-orange-400 calc-bot hover:bg-orange-500"
          onClick={() => Calc("=")}
        >
          =
        </div>
      </div>
    </>
  );
};

export default Home;
