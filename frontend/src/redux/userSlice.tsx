import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from './store';
import axios from "axios";


export interface SignUpPackage {
    email: string;
    password: string; //should be hashed
    firstName: string;
    lastName: string;
    securityQuestionId: number;
    securityAnswer: string; //should be hashed
}

export const signUpUser = createAsyncThunk(
  'currentUser/create',
  async (payload : SignUpPackage) =>{
    const response = axios.post("http://localhost:6969/user", payload)
      .then(response => response.data )
      .catch(error => error)
    return response;
  }
);

export interface UserState {
  currentUser : {
    id : string;
    password: string; //should be hashed
    email: string;
    firstName: string;
    lastName: string;
    securityQuestionId: number;
    securityAnswer: string; //should be hashed
  }
}

const initialState : UserState = {
  currentUser: {
    id : "",
    password : "",
    email : "",
    firstName: "",
    lastName: "",
    securityQuestionId : 1,
    securityAnswer : ""
  }
}

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  // reducers should be used if something in the store is updated without any APIs messing with it
  // right now the actions we use for authentication all require an axios HTTP call to properly update store
  //So this is empty for now
  reducers : {},
  // we use this to deal with our reducers that require a thunk. Since all of these reducers need to an API call
  // we put them here
  // https://redux-toolkit.js.org/usage/usage-with-typescript/#type-safety-with-extrareducers
  // the above link gives the reasoning for why declared extraReducers the way we did
  extraReducers : (builder) => {
    builder.addCase(
      signUpUser.fulfilled,
      ( 
        state, 
        action : {
          payload: {
            id : string;
            username: string;
            password: string; //should be hashed
            email: string;
            firstName: string;
            lastName: string;
            securityQuestionId: number;
            securityAnswer: string; //should be hashed
          }
        }
      ) => {
        console.log("Dispatching signUpUser reducer with action: ", action);
        state.currentUser = action.payload;
      }
    )
  }
})

export const currentUser = (state:RootState) => state.currentUser;

export default userSlice.reducer;
