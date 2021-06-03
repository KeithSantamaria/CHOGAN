import React from 'react';
import FolderCard from '../../components/home/FolderCard.component';
import ProjectCard from '../../components/home/ProjectCard.component';

import {Col, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSortDown} from "@fortawesome/free-solid-svg-icons";



export default function GridView(props: any) {
  return (
    <>
        <Row className="folder-container-wrapper">
            <Col style={{paddingBottom: '15px'}}>
                <span>Folders</span>
            </Col>

            <Col className="row-2-col-2" >
                <div style={{float: 'right'}}>
                    <span style={{paddingRight: '8px'}}>Name</span>
                    <FontAwesomeIcon className="fa-icon" icon={faSortDown}/>
                </div>
                
            </Col>
        </Row>

        <FolderCard folders={props.folders}/>

        <Row className="project-container-wrapper">
            <Col>
                <span>Projects</span>
            </Col>
        </Row>

        <ProjectCard projects={props.projects}/>

    </>
  );
}
