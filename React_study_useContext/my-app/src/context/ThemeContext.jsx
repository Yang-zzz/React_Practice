import { createContext, useState } from "react";

const ThemeContext = createContext(null);
const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isTest, setIsTest] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, isTest, setIsTest }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
