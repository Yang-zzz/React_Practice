import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);
  console.log('Header 컴포넌트 입니다.')

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome {user}!</h1>
    </header>
  );
};

export default Header;
