import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/authentication/login.css'
import {useAppSelector, useAppDispatch} from '../../redux/hooks';
import {currentUser, signUpUser} from '../../redux/userSlice';


export default function SignUp() {

    const currentlyLoggedUser = useAppSelector(currentUser);
    const dispatchUser = useAppDispatch();

    React.useEffect(() => {
        console.log(currentlyLoggedUser);
    }, [currentlyLoggedUser]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [securityQuestionId, setSecurityQuestionId] = useState("1");
    const [securityAnswer, setSecurityAnswer] = useState("");

    

    //Send value to database
     const submitUser = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const userPayload = {
          password: password, //should be hashed
          email: email,
          firstName: firstName,
          lastName: lastName,
          securityQuestionId: Number(securityQuestionId),
          securityAnswer: securityAnswer //should be hashed
        }
        // This is calling the redux thunk which does the axios call for us. See 'src/redux/userSlice.tsx' for details
        dispatchUser(signUpUser(userPayload));
    }

    return(
    <div>
        <form onSubmit={submitUser}>
            
            <div className="form-group">
                <p className = "text-center">SignUp</p>
                <input
                    className="form-control center"
                    name='email'
                    id='email'
                    type='email'
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                </div>
                <div className="form-group">
                <input
                    className="form-control center"
                    name='password'
                    id='password'
                    type='password'
                    placeholder='Password'
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                </div>

                <div className="form-group">
                <input
                    className="form-control center"
                    name='firstName'
                    id='firstName'
                    type='firstName'
                    placeholder='First Name'
                    onChange={e => setFirstName(e.target.value)}
                    required
                />
                </div>

                <div className="form-group">
                <input
                    className="form-control center"
                    name='lastName'
                    id='lastName'
                    type='lastName'
                    placeholder='Last Name'
                    onChange={e => setLastName(e.target.value)}
                    required
                />
                </div>


                <div className="form-group">
                    <select
                        className="form-control"
                        name='securityQuestionId'
                        id='username'
                        placeholder='Choose a security question'
                        onChange={e => setSecurityQuestionId(e.target.value)}
                        required
                        value = {securityQuestionId}
                    >
                        <option value="1">What's your mother's maiden name?</option>
                        <option value="2">What was the name of your first pet?</option>
                        <option value="3">Name of the elementary school you attended?</option>
                        <option value="4">What is the street name of your childhood home?</option>
                    </select>
                </div>
                <div className="form-group">
                 <input
                    className="form-control center"
                    name= 'securityAnswer'
                    id='securityAnswer'
                    type='securityAnswer'
                    placeholder='Security Answer'
                    onChange={e => setSecurityAnswer(e.target.value)}
                    required
                />
                </div>
                <button className="btn btn-primary btn-block center" type='submit'>SignUp</button>
        </form>
    </div>);
    }