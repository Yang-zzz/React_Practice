import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom"
import store from "../src/store"
import { Provider } from "react-redux"; 

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);
