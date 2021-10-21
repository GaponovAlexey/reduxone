import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

export const rootReducers = combineReducers({
	users: userReducer,
})

export const store = createStore(rootReducers, applyMiddleware(thunk))

export type RootStateTypeOf = ReturnType<typeof rootReducers>

