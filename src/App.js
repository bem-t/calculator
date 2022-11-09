import { evaluate } from "mathjs";
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const handleCalculate = () => {
    setInput(evaluate(input));
  };

  const calSqrt = () => {
    setInput(input + "√");
    setInput(Math.sqrt(input));
  };

  const handleOperator = (opp) => {
    setInput(input + opp);
  };
  return (
    <div className="App">
      <div>
        <Input vlu={input} />
        <div className="button">
          <Button btn="C" fn={() => setInput("")} />
          <Button btn="%" fn={() => handleOperator("%")} />
          <Button btn="DEL" fn={() => setInput(input.slice(0, -1))} />
          <Button btn="/" fn={() => handleOperator("/")} />
          <Button btn="7" fn={() => setInput(input + "7")} />
          <Button btn="8" fn={() => setInput(input + "8")} />
          <Button btn="9" fn={() => setInput(input + "9")} />
          <Button btn="*" fn={() => handleOperator("*")} />
          <Button btn="4" fn={() => setInput(input + "4")} />
          <Button btn="5" fn={() => setInput(input + "5")} />
          <Button btn="6" fn={() => setInput(input + "6")} />
          <Button btn="-" fn={() => handleOperator("-")} />
          <Button btn="1" fn={() => setInput(input + "1")} />
          <Button btn="2" fn={() => setInput(input + "2")} />
          <Button btn="3" fn={() => setInput(input + "3")} />
          <Button btn="+" fn={() => handleOperator("+")} />
          <Button btn="e" fn={() => handleOperator("e")} />
          <Button btn="0" fn={() => setInput(input + "0")} />
          <Button btn="." fn={() => setInput(input + ".")} />
          <Button btn="=" fn={handleCalculate} />
          <Button btn="(" fn={() => setInput(input + "(")} />
          <Button btn=")" fn={() => setInput(input + ")")} />
          <Button btn="^" fn={() => handleOperator("^")} />
          <Button btn="√" fn={calSqrt} />
        </div>
      </div>
    </div>
  );
}
