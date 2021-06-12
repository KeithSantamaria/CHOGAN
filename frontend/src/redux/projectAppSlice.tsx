import { createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { ESMap, Map } from "typescript";

import {RootState,
    //  AppThunk
  } from "./store";

export interface Model {
    modelId: string;
    modelName: string;
    modelMetadata:Array<{
        // index signature https://basarat.gitbook.io/typescript/type-system/index-signatures
        key: string, value: string
    }>
}

export interface Endpoint {
    endpointId: string;
    endpointName: string;
    endpointUrlPattern: string;
    endpointDescription: string;
}

export interface Tag {
    tagId: string;
    tagName: string;
    tagDescription: string;
}

export interface UserStory {
    userStoryId: string;
    userStoryDescription: string;
}

export interface Widget {
    widgetName: string;
    widgetDescription: string;
}

export interface Project {
    projectId: string;
    projectName: string;
    projectDescription: string;
    userId: string;
    projectStatus: string;
    models: Array<Model>;
    endpoints: Array <Endpoint>;
    tags: Array<Tag>;
    userStories: Array<UserStory>;
    widgets: Array<Widget>;
}

export interface ProjectAppState {
    projects : Array<Project>;
    project: Project;
    sampleProjects: Array<Project>;
    model: Model;
    endpoint: Endpoint;
    tag: Tag;
    userStory: UserStory;
    widget:Widget;
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
        userId: "",
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
            userId: "9",
            projectId: "12345",
            projectName: "Sample Project from Store",
            projectDescription: "This project is the base project in redux-store This project is the base project in redux-store This project is the base project in redux-store",
            projectStatus: "",
            models: [], endpoints: [], tags: [], userStories: [], widgets: []
            }, 
            {userId: "9",
            projectId: "22345",
            projectName: "Sample 2 from Store",
            projectDescription: "This project is the base project in redux-store",
            projectStatus: "",
            models: [], endpoints: [], tags: [], userStories: [], widgets: []
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
                    userId: string;
                    projectStatus: string;
                    models: Array<Model>,
                    endpoints: Array <Endpoint>,
                    tags: Array<Tag>,
                    userStories: Array<UserStory>,
                    widgets: Array<Widget>
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
                payload: Array<Project>
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