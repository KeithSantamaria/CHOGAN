import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import UnAuthRoute from "./UnAuthRoute";
import AuthPage from "../pages/AuthPage";
import Home from "../pages/home/Home";
import AuthRoute from "./AuthRoute";
import ProjectGeneralInfo from "../components/ProjectGeneralInfo";
import ProjectWireframes from "../components/ProjectWireframes";
import ProjectERDs from "../components/ProjectERDs";
import ProjectEndpoints from "../components/ProjectEndpoints";
import ProjectModels from "../components/ProjectModels";
import ProjectUserStories from "../components/ProjectUserStories";
import ProjectTags from "../components/ProjectTags";

//TODO Make a page not found

function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <UnAuthRoute exact={true} path="/" childComponent={AuthPage} />
          <AuthRoute path="/home" childComponent={Home} />
          <AuthRoute path="/user/project/general" childComponent={ProjectGeneralInfo} />
          <AuthRoute path="/user/project/wireframes" childComponent={ProjectWireframes} />
          <AuthRoute path="/user/project/ERDs" childComponent={ProjectERDs} />
          <AuthRoute path="/user/project/endpoints" childComponent={ProjectEndpoints} />
          <AuthRoute path="/user/project/models" childComponent={ProjectModels} />
          <AuthRoute path="/user/project/userstories" childComponent={ProjectUserStories} />
          <AuthRoute path="/user/project/tags" childComponent={ProjectTags} />
          <Route path="*">
            <p>Page not found!</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
