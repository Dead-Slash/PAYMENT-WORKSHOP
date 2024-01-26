import { createStore, applyMiddleware, compose } from "redux";

import { thunk } from "redux-thunk";
import { Reducer } from "./Reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  Reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
