import React from 'react';
import {Container,Row, Col} from 'react-bootstrap';

import '../css/authentication/AuthPage.css'
// type AuthPageProps = {

// };
//FC<AuthPageProps>
const AuthPage:React.FC = () => {
  return (
    <Container fluid className = "auth-page-overall">
      <Col xs = {7} className = "auth-page-left-pane">
        <p>Left</p>
      </Col>
      <Col xs = {5} className = "auth-page-right-pane">
        <p>Right</p>
      </Col>
    </Container>
  )
}

export default AuthPage;
