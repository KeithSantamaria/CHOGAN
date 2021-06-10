import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Button, Col, Container, Form, FormGroup, Row, Dropdown, ListGroup, ListGroupItem} from "react-bootstrap";
//import {Input} from "reactstrap";
//import {FontAwesomeIcon} from 'fortawesome/fontawesome'
//import axios from Axios;
import {configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import homeAppReducer from "./home";
export default musicAppSlice.reducer

const initialState: MusicAppStore = {};

export const musicAppSlice = createSlice({})

{
    import {useApp}
    import {selec, sep, set} from '../redux/musicAppSlice";
}


function ProjectList(props: any){
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

    function alertClicked() {
        alert('You clicked the third ListGroupItem');
      }

    const tsx = (
            <Container className="project-list-item">
                <Row>
                <ListGroup defaultActiveKey="#link1">
                    <ListGroup.Item action href="#link1">
                        {props.name}
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2" disabled>
                        Link 2
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={alertClicked}>
                        This one is a button
                    </ListGroup.Item>
                </ListGroup>
                </Row>
            </Container>
    );
    return tsx;
}

export default ProjectList