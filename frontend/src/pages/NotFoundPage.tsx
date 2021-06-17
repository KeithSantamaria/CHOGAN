import {Link } from 'react-router-dom';

import { Col, Row, Container, Button} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLightbulb, faChevronLeft} from "@fortawesome/free-solid-svg-icons";

import '../css/other/not-found.css';

export default function NotFoundPage() {
  return (
    <div className="wrapper">
      <Container className="not-found-wrapper-container">
        <span className="col-1-left">
          <span>[4</span>
          <FontAwesomeIcon
            className="fa-icon-light"
            icon={faLightbulb}
          /> 
          <span>4]</span>
        </span>

        <div className="wrapper-02">
          <span>PAGE NOT FOUND</span>
        </div>

        <div style={{paddingTop: '1em'}}>
          <span className="link-wrapper">
            <Link to="/home">
              <FontAwesomeIcon
                style={{paddingRight: '5px'}}
                icon={faChevronLeft}
            /> go back
            </Link>
          </span>
        </div>  
        
      </Container>
    </div>
  );
}
