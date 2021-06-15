import {useState, useEffect} from 'react';

import {Button, Col, Row, Modal, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faSortDown, faSortUp} from "@fortawesome/free-solid-svg-icons";

import ProjectCard from '../../components/home/ProjectCard.component';
import CreateProjectForm from "../home/form/CreateProjectForm";
import '../../css/home/create-new-project.css';

export default function GridView(props: any) {
    const [active, setActive] = useState(false);
    let array = [...props.projects];

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if(active) {
            array.sort((a:any, b:any) => a.projectName > b.projectName ? 1 : -1)
        } 
        else {
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

    const createModal=()=>{
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

            <Container>
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

                <Row>
                    <Col xs={11}>
                        <ProjectCard projects= {array}/>
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
        </>
    );
}
