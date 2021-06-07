import {
    // createAsyncThunk,
    createSlice,

    //  PayloadAction
  } from "@reduxjs/toolkit";
import { ESMap, Map } from "typescript";

  import {
    RootState,
    //  AppThunk
  } from "./store";

  export interface ProjectAppState {
      projects : Array<{
        project: {
            projectId: string;
            projectName: string;
            projectDescription: string;
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
      project: {
        projectId: string;
        projectName: string;
        projectDescription: string;
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
        };
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
    project: {
        projectId: "",
        projectName: "",
        projectDescription: "",
        // models:{
        //     model:{
        //         modelId: "",
        //         modelName: "",
        //         modelMetadata: {
        //             // index signature https://basarat.gitbook.io/typescript/type-system/index-signatures
        //             key: "", value: "",
        //         },              
        //     },
        // },
        // endpoints: {
        //     endpoint: {
        //         endpointId: "",
        //         endpointName: "",
        //         endpointUrlPattern: "",
        //         endpointDescription: "",
        //     }
        // },
        // tags: {
        //     tag:{
        //         tagId: "",
        //         tagName: "",
        //         tagDescription: "",
        //     }
        // },
        // userStories: {
        //     userStory: {
        //         userStoryId: "",
        //         userStoryDescription: "",
        //     }
        // }
        },
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

  export const projectAppSlice = createSlice({
    name: "projectApp",
    initialState,
    reducers: {
        setEndpoint: (
            state, 
            action: {
                payload: {
                    endpointId: string;
                    endpointName: string;
                    endpointUrlPattern: string;
                    endpointDescription: string;
                };
            }
        ) => {
            console.log("Dispatching setEndPoint reducer with action: ", action);
            state.endpoint = action.payload;
        },
        setUserStory: (
            state,
            action: {
                payload: {
                    userStoryId: string;
                    userStoryDescription: string;
                };
            }
        ) => {
            console.log("Dispatching setUserStory reducer with action: ", action);
            state.userStory = action.payload;
        },
        setTag: (
            state,
            action: {
                payload: {
                    tagId: string;
                    tagName: string;
                    tagDescription: string;
                }
            }
        ) => {
            console.log("Dispatching setTag reducer with action: ", action);
            state.tag = action.payload;
        },
        setModel: (
            state,
            action:{
                payload:{
                    modelId: string,
                    modelName: string,
                    modelMetadata: Array<{
                        key: string, value: string
                    }>, 
                }
            }
        ) => {
          console.log("Dispatching setModel reducer with action:", action);
          state.model = action.payload;
        },
        setProjects: (
            state,
            action:{
                payload: Array<{
                    project: {
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
                }}>
            }
        ) => {
          console.log("Dispatching setProject reducer with aciton: ", action);
          state.projects = action.payload;
        },
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
    setEndpoint,
    setCreateNewEndPointForm,
    setCreateNewPojoForm,
    setCreateNewProjectERD,
    setCreateNewProjectWireframe,
    setCreateNewTag,
    setCreateNewUserStory,
    setModel,
    setProjects,
    setTag,
    setUserStory
  } = projectAppSlice.actions;


  export const selectProjectApp = (state:RootState) => state.projectApp;

  export default projectAppSlice.reducer;