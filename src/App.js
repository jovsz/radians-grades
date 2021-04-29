import Input from "./Input";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [grades, setGrades] = useState();
  const [radians, setRadians] = useState();

  const toGrades = (num) => {
    setRadians(num.target.value * 57.296);
    setGrades(num.target.value);
  };

  const toRadian = (num) => {
    setGrades(num.target.value * 0.01745);
    setRadians(num.target.value);
  };

  return (
    <div className="App">
      <h2>Radians</h2>
      <Input
        func={(num) => {
          toGrades(num);
        }}
        val={grades}
      />
      <h2>Grades</h2>
      <Input
        func={(num) => {
          toRadian(num);
        }}
        val={radians}
      />
    </div>
  );
}


