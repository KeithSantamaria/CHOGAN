import React from 'react';
import {Switch,Route, BrowserRouter as Router} from "react-router-dom";
import TestOne from './TestOne';
import TestTwo from './TestTwo';
import App from './App';
function TestMain() {
    return (
        <Router>
            <Switch>
                <Route path="/one">
                    <TestOne/>
                </Route>
                <Route path="/two">
                    <TestTwo/>
                </Route>
                <Route path="/">
                    <App/>
                </Route>
            </Switch>
        </Router>
    )
}

export default TestMain
