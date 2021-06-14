import React, {useState, useEffect} from 'react';

import {Modal, Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faSortDown, faSortUp} from "@fortawesome/free-solid-svg-icons";

import CreateProjectForm from "../home/form/CreateProjectForm";
import ProjectList from "./ProjectList.component";
import "../../css/home/home-list-view.css";

function HomeListView(props: any){

    const [active, setActive] = useState(false);
    let array = [...props.projects];

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if(active) {
            array.sort((a:any, b:any) => a.projectName > b.projectName ? 1 : -1)
        } else {
            array.sort((a:any, b:any) => a.projectName > b.projectName ? -1 : 1)
        }
    },[active, array]);

    const toggle = () => { 
        if(active === false) {
            setActive(true);
        }
        if(active === true) {
            setActive(false);
        }
        return null;
    }

    let className='sort';
    if(active) {
        className += ' sort-active';
    } else {
        className='sort';
    }

    const handleSelect = (projectId: string) => {

    }

    const createModal = () => {
        return(
            <Modal
                className="modal-create-wrapper"
                show={show}
                onHide={handleClose}
                backdrop="static"
                size="lg"
                centered
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

    

    const tsx = (
        <div>
            <Container className="list-view-container">
                <Row className="project-container-wrapper">
                    <Col>
                        <span>Projects</span>
                    </Col>

                    <Col className="row-2-col-2" >
                        <div style={{float: 'right'}} className={" grid-sort-down"} onClick={toggle}>
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
                                    
                                    <ProjectList projects={array}/>
                                    
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