import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Test = () => {
  const { isTest, setIsTest } = useContext(ThemeContext);
  const toggleTheme = () => {
    setIsTest(!isTest);
  };
  console.log(isTest);

  return (
    <button className="button" onClick={toggleTheme}>
      TestButton
    </button>
  );
};

export default Test;
