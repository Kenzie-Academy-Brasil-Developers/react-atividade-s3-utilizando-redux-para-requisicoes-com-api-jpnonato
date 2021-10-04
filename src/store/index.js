import { combineReducers, createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import digimonsReducer from "./modules/digimons/digimonsReducer";

const reducers = combineReducers({digimons: digimonsReducer})

const store = createStore(reducers, applyMiddleware(thunk) )

export default store