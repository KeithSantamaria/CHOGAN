import react, {useState} from "react";
import {useForm} from "./loginFormLogic"
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/authentication/login.css'

export default function LoginForm(){

    const initialState = {
        email: "",
        password: "",
    };

    const { onChange, onSubmit, values } = useForm(
        loginUserCallback,
        initialState
    ); 

    async function loginUserCallback() {
        // send "values" to database
    }

return(
    <form onSubmit ={onSubmit}>
        <div className="form-group">
            <label className = "text-center">Sign In</label>
            <input
                className="form-control center"
                name='email'
                id='email'
                type='email'
                placeholder='Email'
                onChange={onChange}
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
                onChange={onChange}
                required
            />
            
        </div>
        <button className="btn btn-primary btn-block center" type='submit'>Login</button>
    </form>
);
}