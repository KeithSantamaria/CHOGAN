import React, {useState, useEffect} from 'react';
import FolderCard from '../../components/home/FolderCard.component';
import ProjectCard from '../../components/home/ProjectCard.component';

import {Button, Col, Form, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faSortDown, faSortUp} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import CreateProjectForm from "./form/CreateProjectForm";

export default function GridView(props: any) {
    const [active, setActive] = useState(false);
    const [sortedArray, setSortedArray] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if(active) {
            props.projects.sort((a:any, b:any) => a.name > b.name ? 1 : -1)
            setSortedArray(props.projects);
        } else {
            props.projects.sort((a:any, b:any) => a.name > b.name ? -1 : 1)
            setSortedArray(props.projects);
        }

    },[active, props.projects]);

    const toggle = () => { 
        if(active === false) {
            setActive(true);
            console.log("Sort" + JSON.stringify(sortedArray));
        }
        if(active === true) {
            setActive(false);
            console.log("Not" + JSON.stringify(sortedArray));
        }
        return null;
    }

    const createModal=()=>{
        return(
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>New Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateProjectForm handleClose={handleClose}/>
                </Modal.Body>
            </Modal>
            )
    }

    let className='sort';
    if(active) {
        className += ' sort-active';
    } else {
        className='sort';
    }

    return (
        <>
            {/* <Row className="folder-container-wrapper">
                <Col style={{paddingBottom: '15px'}}>
                    <span>Folders</span>
                </Col>

                <Col className="row-2-col-2" >
                    <div style={{float: 'right'}} className={className + " grid-sort-down"} onClick={toggle}>
                        <span style={{paddingRight: '8px'}}>Name</span>
                        {active ? <FontAwesomeIcon className="fa-icon fa-1x" icon={faSortDown}/> : <FontAwesomeIcon className="fa-icon fa-1x" icon={faSortUp}/>}
                    </div>
                    
                </Col>
            </Row>

            <FolderCard folders={props.folders}/> */}

            <Row className="project-container-wrapper">
                <Col>
                    <span>Projects</span>
                </Col>

                <Col className="row-2-col-2" >
                    <div style={{float: 'right'}} className={className + " grid-sort-down"} onClick={toggle}>
                        <span style={{paddingRight: '8px'}}>Name</span>
                        {active ? <FontAwesomeIcon className="fa-icon fa-1x" icon={faSortDown}/> : <FontAwesomeIcon className="fa-icon fa-1x" icon={faSortUp}/>}
                    </div>
                    
                </Col>
            </Row>

            <hr/>

            <ProjectCard projects= {sortedArray}/>
            <FontAwesomeIcon icon={faPlus} className="" onClick={handleShow}/>

            {createModal()}
        </>
    );
}
