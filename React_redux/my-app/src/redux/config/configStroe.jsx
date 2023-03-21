import { createStore } from "redux";
import { reducer } from "../module/todo";

export const store = createStore(reducer);
 