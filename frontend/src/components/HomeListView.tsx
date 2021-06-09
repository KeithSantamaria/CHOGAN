import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Button, Col, Container, Form, FormGroup, Row, Dropdown} from "react-bootstrap";
import ProjectList from "./ProjectList";
//import {Input} from "reactstrap";
//import {FontAwesomeIcon} from 'fortawesome/fontawesome'
//import axios from Axios;
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {createSlice} from "";
import {} from "../redux/projectListViewSlice";


function HomeListView(){
    //useState()
    const [projects, setProjects] = useState([
        {id: 1, name: 'Project1', des: 'Project Chogan1', tags: ["React", "Docker", "Java"]},
        {id: 2, name: 'Project2', des: 'Project Chogan2', tags: ["React", "Docker", "Java"]},
        {id: 3, name: 'Project3', des: 'Project Chogan3', tags: ["React", "Docker", "Java"]},
        {id: 4, name: 'Project4', des: 'Project Chogan4', tags: ["React", "Docker", "Java"]},
        {id: 5, name: 'Project5', des: 'Project Chogan5', tags: ["React", "Docker", "Java"]}
    ]);

    const [folders, setFolders] = useState([
        {id: 1, name: 'School'},
        {id: 2, name: 'Work'},
        {id: 3, name: 'School'},
        {id: 4, name: 'Work'}
    ]);

    const tsx = (
        <div>
            <Container className="top-menu">
                <Row>
                    <Col>
                        <h2>Projects</h2>
                    </Col>
                    <Col >
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="sort-dropdown" >
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Date</Dropdown.Item> {/*sort by last updated*/}
                                <Dropdown.Item href="#/action-3">Technology Tags</Dropdown.Item> {/*this might not be possible*/}
                                <Dropdown.Item href="#/action-4">Description</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <div className="projects-list" id="projects-list-container">
                <ProjectList projects={projects}></ProjectList>
                </div>
            </Container>
        </div>
    );
    return tsx;
}

export default HomeListView