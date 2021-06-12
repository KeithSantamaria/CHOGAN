import React, { Component } from 'react';
import {Button, Col, Row} from 'react-bootstrap';
// import '../css/project-sidenav.css';
import { useHistory } from "react-router-dom";

const ProjectSideNav = () => {

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
        return (
        <div>
            <div>
                <Row>
                    <Col>
                    <p onClick={goToGeneral}> General Information </p>
                    </Col>

                </Row>

                <Row>
                    <Col>
                    <p onClick={goToWireframes}> Wireframes </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <p onClick={goToERDs}> ERD </p>
                    </Col>

                </Row>

                <Row>
                    <Col>
                    <p onClick={goToEndpoints}> Endpoints </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <p onClick={goToModels}> Models </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <p onClick={goToUserStories}> User Stories </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <p onClick={goToTags}> Technology Tags </p>
                    </Col>
                </Row>

            </div>
        </div>
        )
    }

export default ProjectSideNav;
