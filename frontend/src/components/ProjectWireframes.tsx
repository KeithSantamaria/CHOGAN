import React from 'react'
import ProjectSideNav from './ProjectSideNav'
import { Container } from "react-bootstrap";

function ProjectWireframes() {
    return (
        <>
            <ProjectSideNav active={"wire-frame"}/>
            <Container id="pg-content">
                <p>Wireframes</p>
            </Container>
        </>
    )
}

export default ProjectWireframes
