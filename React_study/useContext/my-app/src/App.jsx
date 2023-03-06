// import { useState } from "react";
// import { ThemeContext } from "./context/ThemeContext";
// import { UserContext } from "./context/UserContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import Page from "./components/Page";

function App() {
  // const [isDark, setIsDark] = useState(false);

  return (
    // <UserContext.Provider value={"양지성"}>
    //   <ThemeContext.Provider value={{ isDark, setIsDark }}>
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
    //   </ThemeContext.Provider>
    // </UserContext.Provider>
  );
}
export default App;