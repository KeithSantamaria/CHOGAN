import React, { Component } from 'react';
<<<<<<< Updated upstream
import {Button, Col, Row} from 'react-bootstrap';
=======
import {Col, Row} from 'react-bootstrap';
>>>>>>> Stashed changes
import '../css/project-sidenav.css';
import { useHistory } from "react-router-dom";

const ProjectSideNav = () => {

    const history = useHistory();
<<<<<<< Updated upstream
    const goToGeneral = () => {
=======


    const goToGenera = () => {
>>>>>>> Stashed changes
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
        return (
        <div id="sideMenu" className="sideMenu">
            <div className="sm-wrapper">
                <Row>
                    <Col>
<<<<<<< Updated upstream
                    <p onClick={goToGeneral}> General Information </p>
=======
                        <p> General Information </p>
>>>>>>> Stashed changes
                    </Col>

                </Row>

                <Row>
                    <Col>
<<<<<<< Updated upstream
                    <p onClick={goToWireframes}> Wireframes </p>
=======
                    <p> Wireframes </p>
>>>>>>> Stashed changes
                    </Col>
                </Row>

                <Row>
                    <Col>
<<<<<<< Updated upstream
                    <p onClick={goToERDs}> ERD </p>
=======
                    <p> ERD </p>
>>>>>>> Stashed changes
                    </Col>

                </Row>

                <Row>
                    <Col>
<<<<<<< Updated upstream
                    <p onClick={goToEndpoints}> Endpoints </p>
=======
                    <p> Endpoints </p>
>>>>>>> Stashed changes
                    </Col>
                </Row>

                <Row>
                    <Col>
<<<<<<< Updated upstream
                    <p onClick={goToModels}> Models </p>
=======
                    <p> Models </p>
>>>>>>> Stashed changes
                    </Col>
                </Row>

                <Row>
                    <Col>
<<<<<<< Updated upstream
                    <p onClick={goToUserStories}> User Stories </p>
=======
                    <p> User Stories </p>
>>>>>>> Stashed changes
                    </Col>
                </Row>

                <Row>
                    <Col>
<<<<<<< Updated upstream
                    <p onClick={goToTags}> Technology Tags </p>
                    </Col>
                </Row>

=======
                    <p> Technology Tags </p>
                    </Col>
                </Row>
>>>>>>> Stashed changes
            </div>
        </div>
        )
    }

export default ProjectSideNav;
