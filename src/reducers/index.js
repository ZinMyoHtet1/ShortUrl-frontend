import { combineReducers, applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

import authReducer from "./Auth.reducer.js";
import productReducer from "./Product.reducer.js";
import shortUrlReducer from "./ShortUrl.reducer.js";

const rootReducers = combineReducers({
  auth: authReducer,
  products: productReducer,
  shortUrl: shortUrlReducer,
});

export default createStore(rootReducers, applyMiddleware(thunk));
