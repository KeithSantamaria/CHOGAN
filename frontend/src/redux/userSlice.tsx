import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from './store';
import axios from "axios";


// interfaces used with our thunks

interface UserPackage {
    email: string;
    password: string; //should be hashed
    firstName: string;
    lastName: string;
    securityQuestionId: number;
    securityAnswer: string; //should be hashed
}

interface LoginPackage {
  email: string;
  password: string; //should be hashed
}

// thunks used for slice

export const signUpUser = createAsyncThunk(
  'currentUser/create',
  async (payload : UserPackage) =>{
    const response = axios.post("http://localhost:6969/user", payload)
      .then(response => response.data )
      .catch(error => error);
    return response;
  }
);

export const loginUser = createAsyncThunk(
  'currentUser/login',
  async (payload : LoginPackage) => {
    const response = axios.post("http://localhost:6969/user/login", payload)
    .then(response => response.data )
    .catch(error => error);
    return response;
  }
);

//TODO have verify password functionality before actually updating state
export const updateUser = createAsyncThunk(
  'currentUser/update',
  async (payload: UserPackage) => {
    const response = axios.put("http://localhost:6969/user", payload)
      .then(response => response.data)
      .catch(error => error)
    return response;
  }
)

// How the currentUser object in the store should look like
export interface UserState {  
  id : string;
  password: string; //should be hashed
  email: string;
  firstName: string;
  lastName: string;
  securityQuestionId: number;
  securityAnswer: string; //should be hashed
}

const initialState : UserState = {
  id : "",
  password : "",
  email : "",
  firstName: "",
  lastName: "",
  securityQuestionId : 1,
  securityAnswer : ""
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
      ( state, action : { payload : UserState } ) : UserState => {
        console.log("Dispatching signUpUser reducer with action: ", action);
        return action.payload;
      }
    )

    builder.addCase(
      loginUser.fulfilled,
      ( state, action : { payload: UserState } ) : UserState => {
        console.log("Dispatching loginUser reducer with action: ", action);
        return action.payload;
      }
    )

    //TODO probably needs to expand on this more
    builder.addCase(
      updateUser.fulfilled,
      ( state, action : { payload: UserState } ) : UserState => {
        console.log("Dispatching updateUser reducer with action: ", action);
        return action.payload;
      }
    )

  }
})

export const currentUser = (state:RootState) => state.currentUser;

export default userSlice.reducer;
