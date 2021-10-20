import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { countWatcher } from "../saga/countSaga";
import { cashReducer } from "./cashReducer";
import { castomerReducer } from "./castomerReducer";

const SagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  cash: cashReducer,
  cast: castomerReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(SagaMiddleware))
);

SagaMiddleware.run(countWatcher);