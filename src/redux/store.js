import { createStore } from "redux";
import { reducerCombine } from "./redux-compliled";

export const store = createStore(reducerCombine)