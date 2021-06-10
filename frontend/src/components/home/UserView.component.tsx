import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import '../../css/home/user-view.css';

export default function UserView(props: any) {
  return (
    <>
        <Container fluid className="user-info-wrapper">
            <Row className="user-row-1">
                <Col sm={2} className="user-col-1">
                    <h3>Hello,</h3>
                    <h3>John Doe</h3>
                </Col>

                <Col >
                    <FontAwesomeIcon className="user-col-2-icon fa-3x" icon={faUser}/>
                </Col>
            </Row>

            <hr/>

            <Container className="user-row-2">
                <Row >
                    <h5>total projects:</h5>
                </Row>

                <Row>
                    <span className="project-numbers-front">| <span className="project-number">{props.projects.length}</span> </span>
                </Row>

                <Row >
                    <h5>completed:</h5>
                </Row>

                <Row>
                    <span className="project-numbers-front">| <span className="project-number">{props.projects.length}</span> </span>
                </Row>

                <Row >
                    <h5>in progress:</h5>
                </Row>

                <Row>
                    <span className="project-numbers-front">| <span className="project-number">{props.projects.length}</span> </span>
                </Row>
            </Container>
            
        </Container>
        
    </>
  );
}
