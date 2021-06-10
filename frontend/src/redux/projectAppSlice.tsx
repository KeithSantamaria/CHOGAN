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
            projectId: string;
            projectName: string;
            projectDescription: string;
            projectStatus: string;
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
            }>,
            widgets: Array<{
                widget: {
                    widgetName: string;
                    widgetDescription: string;
                }
            }>
        }
      }>;
      project: {
        projectId: string;
        projectName: string;
        projectDescription: string;
        projectStatus: string;
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
        }>,
        widgets: Array<{
            widget: {
                widgetName: string;
                widgetDescription: string;
            }
        }>
      };
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
      widget:{
          widgetName: string;
          widgetDescription: string;
      };
      createNewEndPointForm: {endpointName: string, urlPattern: string, endpointDescription: string};
      createNewPojoForm: {pojoName: string};
      createNewUserStoryForm: {userStoryName: string};
      createNewTagForm: {tagName: string, tagDescription: string};
      createNewWidgetForm: {widgetName: string, widgetDescription: string},
      //Bookmark for later - need to know how to upload photos 
      createNewProjectERDForm: {erdName: string, erdDescription: string};
      //Bookmark for later - need to know how to upload photos 
      createNewProjectWireframeForm: {wireframeName: string, wireframeDescription: string}
  }

  const initialState: ProjectAppState = {
    projects: [],
    project: {
        projectId: "",
        projectName: "",
        projectDescription: "",
        projectStatus: "",
        models:[],
        endpoints: [],
        tags: [],
        userStories: [],
        widgets: []
        },
        sampleProjects: [{
        projectId: "12345",
        projectName: "Sample Project from Store",
        projectDescription: "This project is the base project in redux-store",
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
      widget:{
          widgetName: "",
          widgetDescription: "",
      },
      createNewEndPointForm: {endpointName: "", urlPattern: "", endpointDescription: ""},
      createNewPojoForm: {pojoName: ""},
      createNewUserStoryForm: {userStoryName: ""},
      createNewTagForm: {tagName: "", tagDescription: ""},
      createNewWidgetForm: {widgetName: "", widgetDescription: ""},
      //Bookmark for later - need to know how to upload photos 
      createNewProjectERDForm: {erdName: "", erdDescription: ""},
      //Bookmark for later - need to know how to upload photos 
      createNewProjectWireframeForm: {wireframeName: "", wireframeDescription: ""},
  };

  const projectAppSlice = createSlice({
    name: 'projectApp',
    initialState,
    reducers: {
        setProject: (
            state, 
            action: {
                payload: {
                    projectId: string;
                    projectName: string;
                    projectDescription: string;
                    projectStatus: string;
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
                    }>,
                    widgets: Array<{
                        widget: {
                            widgetName: string;
                            widgetDescription: string;
                        }
                    }>
                }
            }
        ) => {
            console.log("Dispatching setEndPoint reudcer with action: ", action);
            state.project = action.payload;
        },
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
                    projectId: string;
                    projectName: string;
                    projectDescription: string;
                    projectStatus: string;
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
                    }>,
                    widgets: Array<{
                        widget:{
                            widgetName: string;
                            widgetDescription: string;
                        }
                    }>
                }}>
            }
        ) => {
          console.log("Dispatching setProject reducer with aciton: ", action);
          state.projects = action.payload;
        },

        setProjectEndpointsState: (state, action) => {
            state.project.endpoints = action.payload;
        },

        setProjectWidgetsState: (state, action) => {
            state.project.widgets = [...action.payload];
        },

        setCreateNewEndPointForm: (state, action: {payload: {
            fieldName: string; value: string}                
        }) => {
            const fieldName = action.payload.fieldName;
            const value = action.payload.value;
            console.log(`Setting ${fieldName} to ${value}`);
            state.createNewEndPointForm = {...state.createNewEndPointForm, [fieldName]:value};
        }, 
        setCreateNewPojoForm: (state, action: {payload: {
            fieldName: string; value: string}            
        }) => {
            const fieldName = action.payload.fieldName;
            const value = action.payload.value;
            console.log(`Setting ${fieldName} to ${value}`);
            state.createNewPojoForm = {...state.createNewPojoForm, [fieldName]: value};
        },
        setCreateNewUserStoryForm: (state, action: {payload: {
            fieldName: string; value: string}                
        }) => {
            const fieldName = action.payload.fieldName;
            const value = action.payload.value;
            console.log(`Setting ${fieldName} to ${value}`);
            state.createNewUserStoryForm = {...state.createNewUserStoryForm, [fieldName]: value};
        },
        setCreateNewTagForm: (state, action: {payload: {
            fieldName: string; value: string}            
        }) => {
            const fieldName = action.payload.fieldName;
            const value = action.payload.value;
            console.log(`Setting ${fieldName} to ${value}`);
            state.createNewTagForm = {...state.createNewTagForm, [fieldName]: value};
        },
        //Bookmark for later - need to know how to upload photos 
        setCreateNewProjectERDForm: (state, action: {payload: {
            fieldName: string; value: string}            
        }) => {
            const fieldName = action.payload.fieldName;
            const value = action.payload.value;
            console.log(`Setting ${fieldName} to ${value}`);
            state.createNewProjectERDForm = {...state.createNewProjectERDForm, [fieldName]: value};
        },
        //Bookmark for later - need to know how to upload photos 
        setCreateNewProjectWireframeForm: (state, action: {payload: {
            fieldName: string; value: string}            
        }) => {
            const fieldName = action.payload.fieldName;
            const value = action.payload.value;
            console.log(`Setting ${fieldName} to ${value}`);
            state.createNewProjectWireframeForm = {...state.createNewProjectWireframeForm, [fieldName]: value};
        },
        setCreateNewWidgetForm: (
            state,
            action: {
                payload: { fieldName: string; value: string}            
        }) => {
            const fieldName = action.payload.fieldName;
            const value = action.payload.value;
            console.log(`Setting ${fieldName} to ${value}`);
            state.createNewWidgetForm = {...state.createNewWidgetForm, [fieldName]: value};
        },  
        resetCreateNewWidgetForm: (state) => {
            state.createNewWidgetForm.widgetName = "";
            state.createNewWidgetForm.widgetDescription = "";
        }
    },
  });

  export const {
    resetCreateNewWidgetForm,
    setProjectWidgetsState,
    setProjectEndpointsState,
    setProject,
    setEndpoint,
    setCreateNewEndPointForm,
    setCreateNewPojoForm,
    setCreateNewWidgetForm,
    setCreateNewProjectERDForm,
    setCreateNewProjectWireframeForm,
    setCreateNewTagForm,
    setCreateNewUserStoryForm,
    setModel,
    setProjects,
    setTag,
    setUserStory
  } = projectAppSlice.actions;


  export const selectProjectApp = (state:RootState) => state.projectApp;

  export default projectAppSlice.reducer;