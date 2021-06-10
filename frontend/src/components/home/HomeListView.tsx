import React, {useState, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {store} from '../../redux/store';

import {Button, Col, Container, Form, FormGroup, ListGroup, ListGroupItem, Row, Dropdown} from "react-bootstrap";
import ProjectElipsisBtn from './modal/ProjectElipsisBtn';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faSortDown, faSortUp} from "@fortawesome/free-solid-svg-icons";
import "../../css/home/home-list-view.css";


function HomeListView(){
    const projects = useAppSelector((state) => state.projectApp.sampleProjects);

    const [active, setActive] = useState(false);
    const [sortedArray, setSortedArray] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleSelect = (projectId: string) => {

    }

    const projects_list = projects.map((e: any) => {
        return (
            <ListGroup.Item className="project-list-item">
                <Row>
                    <Col className="project-name">
                        {e.projectName}
                    </Col>
                    <Col className="project-description">
                        {e.projectDescription}
                    </Col>
                <span><ProjectElipsisBtn/></span>
                </Row>
            </ListGroup.Item>
        )
    })

    const tsx = (
        <div>
            <Container className="list-view-container">
                <Row className="project-container-wrapper">
                    <Col>
                        <h2>Projects</h2>
                    </Col>

                    <Col className="row-2-col-2" >
                        <div style={{float: 'right'}} className={" grid-sort-down"} >
                            <span style={{paddingRight: '8px'}}>Name</span>
                            {active ? <FontAwesomeIcon className="fa-icon fa-1x" icon={faSortDown}/> : <FontAwesomeIcon className="fa-icon fa-1x" icon={faSortUp}/>}
                        </div>
                        
                    </Col>
                </Row>

                <hr />

                <Row>
                    <Col>
                        Name
                    </Col>
                    <Col>
                        Description
                    </Col>
                </Row>

                <div className="projects-list" id="projects-list-container">
                    <Container className="project-list-item">
                        <Row className="project-list-row">
                        <ListGroup defaultActiveKey="#link1">
                            <br />
                            {
                                projects_list
                            }
                        </ListGroup>
                        </Row>
                    </Container>
                </div>
            </Container>
        </div>
    );
    return tsx;
}

export default HomeListView