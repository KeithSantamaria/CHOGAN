import react, {useState} from "react";
import {useForm} from "./loginFormLogic"


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
        <div>
            <label>Username</label>
            <input
                name='email'
                id='email'
                type='email'
                placeholder='Email'
                onChange={onChange}
                required
                />

            <input
                name='password'
                id='password'
                type='password'
                placeholder='Password'
                onChange={onChange}
                required
            />
            <button type='submit'>Login</button>
        </div>
    </form>
);
}