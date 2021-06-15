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
          {/* <Route path="*">
            <p>Page not found!</p>
          </Route> */}
          {/* <Route exact path="/">
                        <ProjectGeneralInfo />
                    </Route> */}
          <Route exact path={"/user/project/general"}>
            <ProjectGeneralInfo />
          </Route>
          <Route exact path="/user/project/wireframes">
            <ProjectWireframes />
          </Route>
          <Route exact path="/user/project/ERDs">
            <ProjectERDs />
          </Route>
          <Route exact path="/user/project/endpoints">
            <ProjectEndpoints />
          </Route>
          <Route exact path="/user/project/models">
            <ProjectModels />
          </Route>
          <Route exact path="/user/project/userstories">
            <ProjectUserStories />
          </Route>
          <Route exact path="/user/project/tags">
            <ProjectTags />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
