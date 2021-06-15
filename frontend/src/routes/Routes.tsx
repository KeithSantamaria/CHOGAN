import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import UnAuthRoute from './UnAuthRoute';
import AuthPage from '../pages/AuthPage';
import Home from '../pages/home/Home';
import AuthRoute from './AuthRoute';

//TODO Make a page not found

function Routes() {
  return(
    <div>
      <Router>
        <Switch>
          <UnAuthRoute exact = {true} path = "/" childComponent = {AuthPage} />
          <AuthRoute path = "/home" childComponent = {Home} />
          <Route path = "*">
            <p>Page not found!</p>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Routes;