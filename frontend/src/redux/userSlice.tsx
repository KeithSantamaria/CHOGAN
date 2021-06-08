import {createSlice} from "@reduxjs/toolkit";
import {RootState} from './store';

export interface UserState {
  currentUser : {
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

const initialState : UserState = {
  currentUser: {
    id : "",
    username : "",
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
  reducers : {
    setCurrentUser : (
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
      console.log("Dispatching setCurrentUser reducer with action: ", action);
      state.currentUser = action.payload;
    }
  }
})

export const {setCurrentUser} = userSlice.actions;

export const currentUser = (state:RootState) => state.currentUser;

export default userSlice.reducer;