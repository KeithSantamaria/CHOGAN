import React from 'react';
import {Navbar} from 'react-bootstrap';
import '../css/other/nav.css';

import { useHistory } from "react-router-dom";
import { useAppSelector } from '../redux/hooks';
import {currentUser} from '../redux/userSlice';

export default function TopNavbar() {
  const currentlyLoggedUser = useAppSelector(currentUser);
  const history = useHistory();

  return (
    <>
      <div className="nav-wrapper">
        <Navbar>
          <Navbar.Brand>
            <h3 onClick={() => {history.push("/")}}>Chogan</h3>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
              <Navbar.Text style={{color: '#f5f5f5'}}>

                <span style={{paddingRight: '2em'}} >Signed in as: <a style={{color: 'gray'}} onClick={() => {history.push("/profile")}}>{currentlyLoggedUser.firstName}</a></span>
                <span className="logout-wrapper"><a href="/home">Logout</a></span>
              </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
      
    
    </>
  );
}
