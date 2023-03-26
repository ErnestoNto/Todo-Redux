import { combineReducers } from "redux";

import tasksReducer from "./tasks/tasks";

export const reducerCombine = combineReducers({ tasksReducer })