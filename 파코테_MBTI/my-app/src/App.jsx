import Home from "./pages/Home/Home";
import Survey from "./pages/Survey/Survey";
import Result from "./pages/Result/Result";
import { Reset } from "styled-reset";
import GlobalStyles from "./createGlobalStyle/GlobalStyle";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/survey/" element={<Survey />}></Route>
          <Route path="/Result" element={<Result />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
