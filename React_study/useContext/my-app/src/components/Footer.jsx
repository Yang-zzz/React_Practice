import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Test from "./Test";

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <footer
      className="footer"
      style={{ backgroundColor: isDark ? "black" : "lightgray" }}
    >
      <button className="button" onClick={toggleTheme}>
        DarkMode
      </button>
      <Test></Test>
    </footer>
  );
};

export default Footer;
