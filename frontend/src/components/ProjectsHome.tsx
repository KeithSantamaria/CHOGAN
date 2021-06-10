import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectSideNav from './ProjectSideNav';
import ProjectGeneralInfo from './ProjectGeneralInfo';
import ProjectWireframes from './ProjectWireframes';
import ProjectERDs from './ProjectERDs';
import ProjectModels from './ProjectModels';
import ProjectUserStories from './ProjectUserStories';
import ProjectTags from './ProjectTags';
<<<<<<< Updated upstream
import ProjectEndpoints from './ProjectEndpoints';

function ProjectsHome() {
    return (
        <div>           
            <Router>
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
            </Router>
=======

function ProjectsHome() {

    return (
        <div>
            <ProjectSideNav />
            <Router>
                <Switch>
                <Route exact path="/user/project/general">
                    <ProjectGeneralInfo />
                </Route>
                <Route exact path={"/user/project/wireframes"}>
                    <ProjectWireframes />
                </Route>
                <Route exact path="/user/project/ERDs">
                    <ProjectERDs />
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
            </Router>

>>>>>>> Stashed changes
        </div>
    )
}

export default ProjectsHome;
