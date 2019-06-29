import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import Routes from "./app/Routes";

function App() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(thunk))
  );

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
