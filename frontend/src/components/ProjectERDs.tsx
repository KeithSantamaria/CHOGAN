import React from 'react';
import ProjectSideNav from './ProjectSideNav';
import { Container } from "react-bootstrap";


function ProjectERDs() {
    return (
        <>
            <ProjectSideNav active={"erd"}/>
            <Container id="pg-content">
                <p>ERDs</p>
            </Container>
        </>
    )
}

export default ProjectERDs
