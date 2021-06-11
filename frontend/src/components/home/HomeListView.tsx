import React, {useState, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {store} from '../../redux/store';

import {Modal, Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faSortDown, faSortUp, faClipboardList} from "@fortawesome/free-solid-svg-icons";

import ProjectElipsisBtn from './modal/ProjectElipsisBtn';
import CreateProjectForm from "../home/form/CreateProjectForm";
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

    const createModal=()=>{
        return(
            <Modal
                className="modal-create-wrapper"
                show={show}
                onHide={handleClose}
                backdrop="static"
                size="lg"
            >
                <Modal.Header closeButton>
                    {/* <Modal.Title>New Project</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <CreateProjectForm handleClose={handleClose}/>
                </Modal.Body>
            </Modal>
        )
    }

    const projects_list = projects.map((e: any) => {
        return (
            <ListGroup.Item className="project-list-item">
                <Row>
                    <Col className="project-name">
                        <FontAwesomeIcon style={{height: '40%', marginRight: '10px'}}className="fa-1x" icon={faClipboardList}/> 
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
                        <span>Projects</span>
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

                    <Col xs={7}>
                        Description
                    </Col>

                </Row>
                
                <div className="projects-list" id="projects-list-container">
                    <Container>
                        <Row className="project-list-row">
                            <Col xs={11}>

                                <ListGroup defaultActiveKey="#link1">
                                    <br />
                                    {
                                        projects_list
                                    }
                                </ListGroup>
                            </Col>

                            <Col xs={1}>
                                <span className="fa-icon-new-proj-wrapper">
                                    <span className="fa-icon-new-proj-wrapper-1">
                                        <Button onClick={handleShow}>
                                            <FontAwesomeIcon icon={faPlus} className="fa-icon-make-new-proj fa-2x" />
                                        </Button>
                                    </span>
                                </span>
                                
                                {createModal()}
                            </Col>
                        </Row>
                    </Container>
                </div>

            </Container>
        </div>
    );
    return tsx;
}

export default HomeListView