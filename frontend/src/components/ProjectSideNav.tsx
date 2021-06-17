import {Row} from 'react-bootstrap';
import '../css/project-service/project-sidenav.css';
import { useHistory } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faSortDown, faSortUp} from "@fortawesome/free-solid-svg-icons";

const ProjectSideNav = (props: any) => {

    const history = useHistory();
    const goToGeneral = () => {
        history.push("/user/project/general");    
    };   
    const goToWireframes = () => {
        history.push("/user/project/wireframes");
    };
    const goToERDs = () => {
        history.push("/user/project/ERDs");
    };
    const goToEndpoints = () => {
        history.push("/user/project/endpoints");
    };
    const goToModels = () => {
        history.push("/user/project/models");
    };   
    const goToUserStories = () => {
        history.push("/user/project/userstories");
    };
    const goToTags = () => {
        history.push("/user/project/tags");
    };
    const goToHome = () => {
        history.push("/home");
    };

        return (
            <div id="sideMenu" className="sideMenu">
                <div className="sm-wrapper">
                    <Row>
                        <span className={props.active === 'general' ? " active-general " : ""}><p onClick={goToGeneral}> General </p></span>
                    </Row>

                    <Row>
                        <span className={props.active === 'wire-frame' ? " active-wire-frame " : ""}><p onClick={goToWireframes}> Wireframes </p></span>
                    </Row>

                    <Row>
                        <span className={props.active === 'erd' ? " active-erd " : ""}><p onClick={goToERDs}> ERD </p></span>
                    </Row>

                    <Row>
                        <span className={props.active === 'endpoint' ? " active-endpoint " : ""}><p onClick={goToEndpoints}> Endpoints </p></span>
                    </Row>

                    <Row>
                        <span className={props.active === 'model' ? " active-model " : ""}><p onClick={goToModels}> Models </p></span>
                    </Row>

                    <Row>
                        <span className={props.active === 'user-story' ? " active-user-story " : ""}><p onClick={goToUserStories}> User Stories </p></span>
                    </Row>

                    <Row>
                        <span className={props.active === 'tag' ? " active-tag " : ""}><p onClick={goToTags}> Tags </p></span>
                    </Row>

                    <Row>
                        <span><p onClick={goToHome}><FontAwesomeIcon className="" icon={faHome} /> Home</p></span>
                                                

                    </Row>
                </div>
            </div>
        )
    }

export default ProjectSideNav;
