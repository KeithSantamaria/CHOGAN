import { useState } from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import '../../css/home/user-view.css';

import { useHistory } from "react-router-dom";
import { useAppSelector } from '../../redux/hooks';
import {currentUser} from '../../redux/userSlice';

export default function UserView(props: any) {
  const currentlyLoggedUser = useAppSelector(currentUser);
  
  const [profileIconFlag, setProfileIconFlag] = useState(false);

  const history = useHistory();

  return (
    <>
      <Container fluid className="user-info-wrapper">
        <Row className="user-row-1">
          <Col sm={2} className="user-col-1">
            <h3>Hello,</h3>
            <h3>{currentlyLoggedUser.firstName} {currentlyLoggedUser.lastName}</h3>
          </Col>

          <Col >
            <FontAwesomeIcon className="user-col-2-icon fa-3x" icon={faUser} onClick={() => {history.push("/profile")}}/>
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

                {/* <Row >
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
                </Row> */}
        </Container>
      </Container>
    </>
  );
}
