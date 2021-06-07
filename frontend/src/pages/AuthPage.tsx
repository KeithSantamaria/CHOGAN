import React, {useState} from 'react';
import {Button, Container, Col} from 'react-bootstrap';

import LoginForm from '../components/loginForm';
import '../css/authentication/AuthPage.css'

const AuthPage:React.FC = () => {
  const signUpText:String = "Don't have an account? Sign up here!";
  const logInText:String = "Already have an account? Log in here!";
  const signUpMode:Boolean = true;
  const logInMode:Boolean = false;

  const [authModeFlag,setAuthModeFlag] = useState(logInMode);
  const [switchModeText, setSwitchModeText] = useState(logInText)

  const handleModeButtonClick = () => {
    if(authModeFlag === logInMode){
      setAuthModeFlag(signUpMode);
      setSwitchModeText(signUpText);
    }
    if(authModeFlag === signUpMode){
      setAuthModeFlag(logInMode);
      setSwitchModeText(logInText);
    }
  }

  const RenderForm = () => {
    if(authModeFlag === logInMode){
      return <LoginForm/>
    }
    else{
      return <p>SignUp</p>
    }
  }

  return (
    <Container fluid className = "auth-page-overall">

      <Col xs = {3} md = {7} className = "auth-page-left-pane" 
        style = {
          { 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/August_Duet.jfif)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }
        }
      >
        <h1 className = "welcome-to-chogan-text">Welcome to Chogan!</h1>
        <h2 className = "welcome-bottom-text">Take your project to the next level!</h2>
      </Col>

      <Col xs = {9} md = {5} className = "auth-page-right-pane">
        <div className = "render-form"><RenderForm/></div>
        <Button 
          className ="switch-auth-mode-button" 
          onClick = {() => handleModeButtonClick() }
          variant = "link"
        >
          {switchModeText}
        </Button>
      </Col>
    </Container>
  )
}

export default AuthPage;
