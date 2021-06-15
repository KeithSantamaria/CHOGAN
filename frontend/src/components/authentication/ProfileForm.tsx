import React, {useEffect, useState} from "react";
import axios from 'axios';
import {useAppSelector, useAppDispatch} from '../../redux/hooks';
import {currentUser, setCurrentUser} from '../../redux/userSlice';
 import {Button, Container, Col} from 'react-bootstrap';
 

export default function ProfileForm(){
    
    //currentUser hooks
    // const currentlyLoggedUser = useAppSelector(currentUser);
    // const userDispatch = useAppDispatch();

    //useState
    const [email, setEmail] = useState("adambosch8@gmail.com"); 
    const [username, setUsername] = useState(""); 
    const [firstName, setFirst] = useState(""); 
    const [lastName, setLast] = useState("");


    //Temporary Payload
    let payload ={
        id: "12344",
        username: "boschaw",
        password: "password",
        email: "adambosch8@gmail.com",
        firstName: "Adam",
        lastName: "Bosch",
        securityQuestionId: 1,
        securityAnswer: "bruh"
    }

    //axios call to change user values
    function submitForm(){
        alert("function submitForm()")
        console.log(payload.email);
    }


 //return html
    return(
        <div>
            <form onSubmit={submitForm}  className="row justify-content-center">
                <table >
                    <tr>
                        <th>Value-Type</th>
                        <th>Original-Value</th>
                        <th>Input-Value</th> 
                    </tr>
                    <tr>
                        <td>email: </td>
                        <td>{payload.email}</td>
                        <td>
                            <input type="text" onChange={e => setEmail(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>username: </td>
                        <td>{payload.username}</td>
                        <td>
                            <input type="text" onChange={e => setUsername(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>First Name: </td>
                        <td>{payload.firstName}</td>
                        <td>
                            <input type="text" onChange={e => setFirst(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Last Name: </td>
                        <td>{payload.lastName}</td>
                        <td>
                            <input type="text" onChange={e => setLast(e.target.value)}/>
                        </td>
                    </tr>
                </table>
                
                <Button variant="primary">Submit Changes</Button>{' '}
            </form>
        </div>
    );
}