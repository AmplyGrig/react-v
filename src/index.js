import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import reduser from "./shared/reduser";
import { renderToString } from "react-dom/server"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from "./shared/App";
import { createStore } from 'redux'
const app = document.getElementById( "root" );
const store = reduser();
ReactDOM.render(
  <Provider store={store}>
      <App />
   </Provider>,
   app
)
