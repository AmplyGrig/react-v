import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Router } from "react-router-dom";
import { Route, Switch, Link } from 'react-router-dom'
import routes from "./routes";

export default class App extends React.Component {
    render() {
        return (
            <div>
               <BrowserRouter>
               <Switch>
               {routes.map(({ path, exact, component: Component, ...rest }) => (
                    <Route key={path} path={path} exact={exact} render={(props) => (
                    <Component {...props} {...rest} />
                    )} />
                ))}
                </Switch>
                </BrowserRouter>
            </div>
        );
    }
}