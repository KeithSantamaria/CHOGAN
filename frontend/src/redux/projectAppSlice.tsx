import {
    // createAsyncThunk,
    createSlice,

    //  PayloadAction
    PayloadAction
  } from "@reduxjs/toolkit";
import { ESMap, Map } from "typescript";

  import {
    RootState,
    //  AppThunk
  } from "./store";

  export interface ProjectAppState {
      projects : Array<{
        project: {
            projectName: string,
            projectDescription: string,
            models: Array<{
                model:{
                    modelId: string;
                    modelName: string;
                    modelMetadata:Array<{
                        // index signature https://basarat.gitbook.io/typescript/type-system/index-signatures
                        key: string, value: string
                    }>                
                }
            }>,
            endpoints: Array <{
                endpoint: {
                    endpointId: string;
                    endpointName: string;
                    endpointUrlPattern: string;
                    endpointDescription: string;
                }
            }>,
            tags: Array<{
                tag:{
                    tagId: string;
                    tagName: string;
                    tagDescription: string;
                }
            }>,
            userStories: Array<{
                userStory: {
                    userStoryId: string;
                    userStoryDescription: string;
                }
            }>
        }
      }>;
      sampleProjects: Array<{
        projectId: string;
        projectName: string;
        projectDescription: string;
      }>;
      model:{
        modelId: string;
        modelName: string;
        modelMetadata: Array<{
            // index signature https://basarat.gitbook.io/typescript/type-system/index-signatures
            key: string, value: string
        }>                
      };
      endpoint: {
        endpointId: string;
        endpointName: string;
        endpointUrlPattern: string;
        endpointDescription: string;
      };
      tag:{
        tagId: string;
        tagName: string;
        tagDescription: string;
      };
      userStory: {
        userStoryId: string;
        userStoryDescription: string;
      };
      createNewEndPointForm: {endpointName: string, urlPattern: string, endpointDescription: string};
      createNewPojoForm: {pojoName: string};
      createNewUserStory: {userStoryName: string};
      createNewTag: {tagName: string, tagDescription: string};
      //Bookmark for later - need to know how to upload photos 
      createNewProjectERD: {erdName: string, erdDescription: string};
      //Bookmark for later - need to know how to upload photos 
      createNewProjectWireframe: {wireframeName: string, wireframeDescription: string}
  }

  const initialState: ProjectAppState = {
    projects: [],
      sampleProjects: [{
        projectId: "12345",
        projectName: "Sample Project from Store",
        projectDescription: "This project is the base project in redux-store This project is the base project in redux-store This project is the base project in redux-store",
      }, {
        projectId: "22345",
        projectName: "Sample 2 from Store",
        projectDescription: "This project is the base project in redux-store",
      }],
      model:{
        modelId: "",
        modelName: "",
        modelMetadata: [],            
      },
      endpoint: {
        endpointId: "",
        endpointName: "",
        endpointUrlPattern: "",
        endpointDescription: "",
      },
      tag:{
        tagId: "",
        tagName: "",
        tagDescription: "",
      },
      userStory: {
        userStoryId: "",
        userStoryDescription: "",
      },
      createNewEndPointForm: {endpointName: "", urlPattern: "", endpointDescription: ""},
      createNewPojoForm: {pojoName: ""},
      createNewUserStory: {userStoryName: ""},
      createNewTag: {tagName: "", tagDescription: ""},
      //Bookmark for later - need to know how to upload photos 
      createNewProjectERD: {erdName: "", erdDescription: ""},
      //Bookmark for later - need to know how to upload photos 
      createNewProjectWireframe: {wireframeName: "", wireframeDescription: ""},
  };

  const projectAppSlice = createSlice({
    name: 'projectApp',
    initialState,
    reducers: {
        setCreateNewEndPointForm: (state, action: {payload: {
            fieldName: string; value: string}                
        }) => {
            const fieldName = action.payload.fieldName;
            const value = action.payload.value;
            console.log(`Setting ${fieldName} to ${value}`);
        }, 
        setCreateNewPojoForm: (state, action: {payload: {
            fieldName: string; value: string}            
        }) => {
            const fieldName = action.payload.fieldName;
            const value = action.payload.value;
            console.log(`Setting ${fieldName} to ${value}`);
        },
        setCreateNewUserStory: (state, action: {payload: {
            fieldName: string; value: string}                
        }) => {
            const fieldName = action.payload.fieldName;
            const value = action.payload.value;
            console.log(`Setting ${fieldName} to ${value}`);
        },
        setCreateNewTag: (state, action: {payload: {
            fieldName: string; value: string}            
        }) => {
            const fieldName = action.payload.fieldName;
            const value = action.payload.value;
            console.log(`Setting ${fieldName} to ${value}`);
        },
        //Bookmark for later - need to know how to upload photos 
        setCreateNewProjectERD: (state, action: {payload: {
            fieldName: string; value: string}            
        }) => {
            const fieldName = action.payload.fieldName;
            const value = action.payload.value;
            console.log(`Setting ${fieldName} to ${value}`);
        },
        //Bookmark for later - need to know how to upload photos 
        setCreateNewProjectWireframe: (state, action: {payload: {
            fieldName: string; value: string}            
        }) => {
            const fieldName = action.payload.fieldName;
            const value = action.payload.value;
            console.log(`Setting ${fieldName} to ${value}`);
        },
    },
  });

  export const {
    setCreateNewEndPointForm,
    setCreateNewPojoForm,
    setCreateNewProjectERD,
    setCreateNewProjectWireframe,
    setCreateNewTag,
    setCreateNewUserStory,
  } = projectAppSlice.actions;


  export const selectProjectApp = (state:RootState) => state.projectApp;

  export default projectAppSlice.reducer;