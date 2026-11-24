import { useState } from "react";
import Button from "./Button";

function getFontSize(text: string) {
  const length = text.length;           

  if (length <= 9) return "text-5xl";   
  if (length <= 12) return "text-4xl";
  if (length <= 15) return "text-3xl";
  if (length <= 18) return "text-2xl";
  return "text-xl";                      
}

function Calculator() {
  const [value, setValue] = useState("0");
  const [operator, setOperator] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [isOperatorClicked, setIsOperatorClicked] = useState(false);

  function inputValue(newValue: string) {
    if (newValue === "." && !isOperatorClicked && value.includes(".")) {
      return;
    }

    setValue((currentValue) => {
      if (isOperatorClicked || currentValue === "Error") {
        return newValue === "." ? "0." : newValue;
      }
      if (newValue === ".") {
        return currentValue === "0" ? "0." : currentValue + newValue;
      }
      return currentValue === "0" ? newValue : currentValue + newValue;
    });
    setIsOperatorClicked(false);
  }

  function getResult(a: number, b: number, op: string): number | null {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "x":
        return a * b;
      case "÷":
        return b === 0 ? null : a / b;
      default:
        return null;
    }
  }

  function formatResult(result: number | null) {
    return result === null || !Number.isFinite(result)
      ? "Error"
      : String(Number(result.toPrecision(12)));
  }

  function handleOperatorClick(op: string) {
    if (!operator) {
      setPreviousValue(value);
      setOperator(op);
      setIsOperatorClicked(true);
      return;
    }

    if (isOperatorClicked) {
      setOperator(op);
      return;
    }

    const result = getResult(Number(previousValue), Number(value), operator);
    const formattedResult = formatResult(result);
    setValue(formattedResult);
    setPreviousValue(formattedResult);
    setOperator(op);
    setIsOperatorClicked(true);
  }

  function calculateResult() {
    if (!operator || isOperatorClicked) {
      return;
    }

    const result = getResult(Number(previousValue), Number(value), operator);
    setValue(formatResult(result));
    setPreviousValue("");
    setOperator("");
    setIsOperatorClicked(true);
  }

  function handleEqualClick() {
    calculateResult();
  }

  function clearCalculator() {
    setValue("0");
    setOperator("");
    setPreviousValue("");
    setIsOperatorClicked(false);
  }

  function toggleSign() {
    if (value !== "0" && value !== "Error") {
      setValue(String(Number(value) * -1));
    }
  }

  function convertToPercent() {
    if (value !== "Error") {
      setValue(String(Number(value) / 100));
    }
  }

  return (
    <div className="w-80 bg-black">
      <div className={`mb-0 flex h-20 items-end justify-end bg-[#777] px-2 pb-1 ${getFontSize(value)} font-light text-white`}>
        {value}
      </div>
      <div className="grid grid-cols-4">
        <Button
          label="AC"
          className="bg-[#e2e2e2] text-black hover:bg-gray-300"
          onClick={clearCalculator}
        />
        <Button
          label="+/-"
          className="bg-[#e2e2e2] text-black hover:bg-gray-300"
          onClick={toggleSign}
        />
        <Button
          label="%"
          className="bg-[#e2e2e2] text-black hover:bg-gray-300"
          onClick={convertToPercent}
        />
        <Button
          label="÷"
          className="bg-[#c66d25] text-white hover:bg-orange-600"
          onClick={() => handleOperatorClick("÷")}
        />

        <Button label="7" className="bg-[#e2e2e2] text-black hover:bg-gray-300" onClick={() => inputValue("7")} />
        <Button label="8" className="bg-[#e2e2e2] text-black hover:bg-gray-300" onClick={() => inputValue("8")} />
        <Button label="9" className="bg-[#e2e2e2] text-black hover:bg-gray-300" onClick={() => inputValue("9")} />
        <Button
          label="x"
          className="bg-[#c66d25] text-white hover:bg-orange-600"
          onClick={() => handleOperatorClick("x")}
        />

        <Button label="4" className="bg-[#e2e2e2] text-black hover:bg-gray-300" onClick={() => inputValue("4")} />
        <Button label="5" className="bg-[#e2e2e2] text-black hover:bg-gray-300" onClick={() => inputValue("5")} />
        <Button label="6" className="bg-[#e2e2e2] text-black hover:bg-gray-300" onClick={() => inputValue("6")} />
        <Button
          label="-"
          className="bg-[#c66d25] text-white hover:bg-orange-600"
          onClick={() => handleOperatorClick("-")}
        />

        <Button label="1" className="bg-[#e2e2e2] text-black hover:bg-gray-300" onClick={() => inputValue("1")} />
        <Button label="2" className="bg-[#e2e2e2] text-black hover:bg-gray-300" onClick={() => inputValue("2")} />
        <Button label="3" className="bg-[#e2e2e2] text-black hover:bg-gray-300" onClick={() => inputValue("3")} />
        <Button
          label="+"
          className="bg-[#c66d25] text-white hover:bg-orange-600"
          onClick={() => handleOperatorClick("+")}
        />

        <Button
          label="0"
          className="col-span-2 bg-[#e2e2e2] text-black hover:bg-gray-300"
          onClick={() => inputValue("0")}
        />
        <Button
          label="."
          className="bg-[#e2e2e2] text-black hover:bg-gray-300"
          onClick={() => inputValue(".")}
        />
        <Button
          label="="
          className="bg-[#c66d25] text-white hover:bg-orange-600"
          onClick={handleEqualClick}
        />
      </div>
    </div>
  );
}

export default Calculator;
