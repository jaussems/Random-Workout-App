// src/store/index.js
import { createStore, applyMiddleware, compose } from "redux";

import ReduxThunk from "redux-thunk";
import reducer from "./rootreducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

const store = createStore(reducer, enhancer);

export default store;
