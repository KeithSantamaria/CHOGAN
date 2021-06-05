import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';
import '../css/project-sidenav.css';
import { useHistory } from "react-router-dom";

const ProjectSideNav = () => {

    const history = useHistory();


    const goToGenera = () => {
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
                        <p> General Information </p>
                    </Col>

                </Row>

                <Row>
                    <Col>
                    <p> Wireframes </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <p> ERD </p>
                    </Col>

                </Row>

                <Row>
                    <Col>
                    <p> Endpoints </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <p> Models </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <p> User Stories </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <p> Technology Tags </p>
                    </Col>
                </Row>
            </div>
        </div>
        )
    }

export default ProjectSideNav;
