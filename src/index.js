import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

// redux-logger is a middleware that lets you log every state change
import logger from "redux-logger";

// redux-thunk is a middleware that lets you dispatch async actions
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import App from "./App";
import rootReducer from "./redux/reducers/rootReducer";
import { register } from "./serviceWorker";

const middleware = applyMiddleware(thunk, logger);
const store = createStore(
  rootReducer,
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
register();
