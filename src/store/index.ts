import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cashReducer } from "./cashReducer";
import { castomerReducer } from "./castomerReducer";


const rootReducer = combineReducers({
  cashReducer: cashReducer,
  cast: castomerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
