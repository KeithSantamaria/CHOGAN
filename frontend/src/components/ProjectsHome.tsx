import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectSideNav from './ProjectSideNav';
import ProjectGeneralInfo from './ProjectGeneralInfo';
import ProjectWireframes from './ProjectWireframes';
import ProjectERDs from './ProjectERDs';
import ProjectModels from './ProjectModels';
import ProjectUserStories from './ProjectUserStories';
import ProjectTags from './ProjectTags';
import ProjectEndpoints from './endpoint/ProjectEndpoints';

import '../css/project-sidenav.css';

const toggleSM = () => {
    if(document !== null) {
      const width = document.getElementById("sideMenu")!.style.width;
      const marginLeft = document.getElementById("pg-content")!.style.marginLeft;

      document.getElementById("sideMenu")!.style.width = (width === "150px" ? "55px" : "150px");
      document.getElementById("pg-content")!.style.marginLeft = (marginLeft === "0" ? "0" : "0");
    }
}


function ProjectsHome() {
    return (
        <>           
            <Router>
                <div id="sideMenu" className="sideMenu">
                    <div className="sm-wrapper">
                        <ProjectSideNav/>
                    </div>
                </div>

                <div id="pg-content">
                    <Switch>
                        {/*This will change once Project Services is hooked up to home*/}
                        <Route exact path="/">
                            <ProjectGeneralInfo />
                        </Route>
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
                            <ProjectModels/>
                        </Route>
                        <Route exact path="/user/project/userstories">
                            <ProjectUserStories />
                        </Route>
                        <Route exact path="/user/project/tags">
                            <ProjectTags />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default ProjectsHome;
