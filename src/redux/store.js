import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import employeesReducer from "./employeesReducer";
import workLogReducer from "./worklogReducer";

let reducers = combineReducers({
  employees: employeesReducer,
  worklog: workLogReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;