import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Provider } from "react-redux";
import { store } from "./redux/config/configStroe";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
};

export default App;
