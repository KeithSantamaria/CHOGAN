import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectGeneralInfo from './ProjectGeneralInfo';
import ProjectWireframes from './ProjectWireframes';
import ProjectERDs from './ProjectERDs';
import ProjectModels from './ProjectModels';
import ProjectUserStories from './ProjectUserStories';
import ProjectTags from './ProjectTags';

import '../css/project-service/project-sidenav.css';
import '../css/project-service/modal-create.css';

function ProjectsHome() {

    return (
        <>           
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
        </>
    )
}

export default ProjectsHome;
