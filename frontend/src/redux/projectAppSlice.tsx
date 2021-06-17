import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState,} from "./store";

// ID PAYLOADS
interface userIdPayload {
  params:{
    userId: string;
  }
};

interface projectIdPayload {
  params: {
    projectId: string; 
  }
}

interface wireframeIdPayload{
  params:{
    wireframeId: string;
  }
}

interface modelIdPayload{
  params:{
    modelId: string;
  }
}

interface endpointIdPayload{
  params:{
    endpointId: string;
  }
}

interface erdIdPayload{
  params:{
    erdId: string;
  }
}

interface userStoryIdPayload{
  params:{
    userStoryId: string;
  }
}

interface tagIdPayload{
  params:{
    tagId: string;
  }
}

// CREATE PAYLOADS
interface createProjectPayload {
  userId : string;
  projectName : string;
  projectDescription : string;
}

interface createWidgetPayload {
  projectId: string;
  widgetName: string;
  widgetDescription : string;
}

interface createWireframePayload {
  projectId: string;
  wireframeName: string;
  wireframeDescription: string;
  wireframeImageUrl: string;
}

interface createERDPayload {
  projectId: string;
  erdName: string;
  erdDescription: string;
  erdImageUrl: string;
}

interface createEndpointPayload{
  projectId: string;
  endpointName: string;
  endpointUrlPattern: string;
  endpointDescription: string;
}

interface createTagPayload{
  projectId: string;
  tagName: string;
  tagDescription: string;
}

interface createUserStoryPayload{
  projectId: string;
  userStoryDescription: string;
}

interface createModelPayload {
  projectId: string;
  modelName: string;
  modelMetadata:Array<{ key: string, value: string }>
}


// GET
export const getAllProjects = createAsyncThunk(
  'projects/getAllProjects',
  async (payload : userIdPayload) => {
    const response = axios.get("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/read/projects", payload)
      .then( (response) => response.data)
      .catch(error => {console.log(error)});
    return response;
  }
);

export const getAllWidgets = createAsyncThunk (
  'projects/getAllWidgets',
  async (payload : projectIdPayload) => {
    const response = axios.get("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/read/project/widgets", payload)
    .then( (response) => response.data)
    .catch( error => {console.log(error)});
    return response;
  }
)

export const getAllWireframes = createAsyncThunk (
  'projects/getAllWireframes',
  async (payload : projectIdPayload) => {
    const response = axios.get("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/read/project/wireframes", payload)
    .then( (response) => response.data)
    .catch( error => {console.log(error)});
    return response;
  }
)

export const getAllERDs = createAsyncThunk (
  'projects/getAllERDs',
  async (payload : projectIdPayload) => {
    const response = axios.get("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/read/project/erds", payload)
    .then( (response) => response.data)
    .catch( error => {console.log(error)});
    return response;
  }
)

export const getAllEndpoints = createAsyncThunk (
  'projects/getAllEndpoints',
  async (payload : projectIdPayload) => {
    const response = axios.get("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/read/project/endpoints", payload)
    .then( (response) => response.data)
    .catch( error => {console.log(error)});
    return response;
  }
)

export const getAllModels = createAsyncThunk (
  'projects/getAllModels',
  async (payload : projectIdPayload) => {
    const response = axios.get("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/read/project/models", payload)
    .then( (response) => response.data)
    .catch( error => {console.log(error)});
    return response;
  }
)

export const getAllUserStories = createAsyncThunk (
  'projects/getAllUserStories',
  async (payload : projectIdPayload) => {
    const response = axios.get("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/read/project/userstories", payload)
    .then( (response) => response.data)
    .catch( error => {console.log(error)});
    return response;
  }
)

export const getAllTags = createAsyncThunk (
  'projects/getAllTags',
  async (payload : projectIdPayload) => {
    const response = axios.get("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/read/project/tags", payload)
    .then( (response) => response.data)
    .catch( error => {console.log(error)});
    return response;
  }
)

// CREATE 
export const createProject = createAsyncThunk (
  'projects/createProject',
  async (payload : createProjectPayload) => {
    const response = axios.post("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/create/project", payload)
      .then( (response) => response.data)
      .catch( (error) => {console.log(error)});
    return response;
  }
);

export const createWidget = createAsyncThunk (
  'projects/createWidget',
  async (payload : createWidgetPayload) => {
    const response = axios.post("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/create/project/widget", payload)
    .then( (response) => response.data)
    .catch( (error) => {console.log(error)});
    return response;
  }
);

export const createWireframe = createAsyncThunk (
  'projects/createWireframe',
  async (payload : createWireframePayload) => {
    const response = axios.post("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/create/project/wireframe", payload)
    .then( (response) => response.data)
    .catch( (error) => {console.log(error)});
    return response;
  }
);

export const createERD = createAsyncThunk (
  'projects/createERD',
  async (payload : createERDPayload) => {
    const response = axios.post("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/create/project/erd", payload)
    .then( (response) => response.data)
    .catch( (error) => {console.log(error)});
    return response;
  }
);

export const createEndpoint = createAsyncThunk (
  'projects/createEndpoint',
  async (payload : createEndpointPayload) => {
    const response = axios.post("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/create/project/endpoint", payload)
    .then( (response) => response.data)
    .catch( (error) => {console.log(error)});
    return response;
  }
);

export const createModel = createAsyncThunk (
  'projects/createModel',
  async (payload : createModelPayload) => {
    const response = axios.post("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/create/project/model", payload)
    .then( (response) => response.data)
    .catch( (error) => {console.log(error)});
    return response;
  }
);

export const createUserStory = createAsyncThunk (
  'projects/createUserStory',
  async (payload : createUserStoryPayload) => {
    const response = axios.post("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/create/project/userstory", payload)
    .then( (response) => response.data)
    .catch( (error) => {console.log(error)});
    return response;
  }
);

export const createTag = createAsyncThunk (
  'projects/createTag',
  async (payload : createTagPayload) => {
    const response = axios.post("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/create/project/tag", payload)
    .then( (response) => response.data)
    .catch( (error) => {console.log(error)});
    return response;
  }
);


// DELETE
export const deleteWireframe = createAsyncThunk(
  'projects/deleteWireframe',
  async(payload: wireframeIdPayload) => {
    const response = axios.get("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/delete/project/wireframe", payload)
    .then( (response) => response.data)
    .catch(error => {console.log(error)});
  return response;
  }
)

export const deleteModel = createAsyncThunk(
  'projects/deleteModel',
  async(payload: modelIdPayload) => {
    const response = axios.get("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/delete/project/model", payload)
    .then( (response) => response.data)
    .catch(error => {console.log(error)});
  return response;
  }
)

export const deleteTag = createAsyncThunk(
  'projects/deleteTag',
  async(payload: tagIdPayload) => {
    const response = axios.get("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/delete/project/tag", payload)
    .then( (response) => response.data)
    .catch(error => {console.log(error)});
  return response;
  }
)

export const deleteERD = createAsyncThunk(
  'projects/deleteERD',
  async(payload: erdIdPayload) => {
    const response = axios.get("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/delete/project/erd", payload)
    .then( (response) => response.data)
    .catch(error => {console.log(error)});
  return response;
  }
)

export const deleteUserStory = createAsyncThunk(
  'projects/deleteUserStory',
  async(payload: userStoryIdPayload) => {
    const response = axios.get("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/delete/project/userstory", payload)
    .then( (response) => response.data)
    .catch(error => {console.log(error)});
  return response;
  }
)

export const deleteEndpoint = createAsyncThunk(
  'projects/deleteEndpoint',
  async(payload: endpointIdPayload) => {
    const response = axios.get("https://a1c38ce6e98214dfbbd87b14cb7d92d5-827158951.us-east-1.elb.amazonaws.com/api/project/api/delete/project/endpoint", payload)
    .then( (response) => response.data)
    .catch(error => {console.log(error)});
  return response;
  }
)


export interface Model {
    modelId: string;
    projectId: string;
    modelName: string;
    modelMetadata:Array<{ key: string, value: string }>
}

export interface Endpoint {
    endpointId: string;
    projectId: string;
    endpointName: string;
    endpointUrlPattern: string;
    endpointDescription: string;
}

export interface Tag {
    tagId: string;
    projectId: string;
    tagName: string;
    tagDescription: string;
}

export interface UserStory {
    userStoryId: string;
    projectId: string;
    userStoryDescription: string;
}

export interface Widget {
    widgetId: string;
    projectId: string;
    widgetName: string;
    widgetDescription: string;
}

export interface Project {
    projectId: string;
    projectName: string;
    projectDescription: string;
    userId: string;
    projectStatus: string;
}

export interface Wireframe {
  wireframeId: string;
  projectId: string;
  wireframeName: string;
  wireframeDescription: string;
  wireframeImg: string;
}

export interface ERDiagram {
  ERDiagramId: string;
  projectId: string;
  ERDiagramName: string;
  ERDiagramDescription: string;
  ERDiagramImageUrl: string;
}

export interface ProjectAppState {
  projects : Array<Project>;
  project: Project;
  // sampleProjects: Array<Project>;
  model: Model;
  models: Array<Model>;
  endpoint: Endpoint;
  endpoints: Array<Endpoint>;
  tag: Tag;
  tags: Array<Tag>;
  userStory: UserStory;
  userStories: Array<UserStory>;
  widget: Widget;
  widgets: Array<Widget>;
  wireframe: Wireframe;
  wireframes: Array<Wireframe>;
  erd: ERDiagram;
  erds: Array<ERDiagram>;
  createNewProjectForm: {projectName: string; projectDescription: string};
  createNewEndpointForm: {endpointName: string, urlPattern: string, endpointDescription: string};
  createNewModelForm: {modelName: string; modelMetadata:Array<{}>};
  createNewUserStoryForm: { userStoryName: string; userStoryDescription: string };
  createNewTagForm: {tagName: string, tagDescription: string};
  createNewWidgetForm: {widgetName: string, widgetDescription: string},
  createNewERDForm: {erdName: string, erdDescription: string; erdImageUrl: string};
  createNewWireframeForm: {wireframeName: string, wireframeDescription: string; wireframeImageUrl: string}
}

const initialState: ProjectAppState = {
  projects: [],
  models: [],
  endpoints: [],
  tags: [],
  userStories: [],
  widgets: [],
  wireframes: [],
  erds: [],
  project: {
    projectId: "",
    userId: "",
    projectName: "",
    projectDescription: "",
    projectStatus: "",
  },
  model: {
    modelId: "",
    projectId: "",
    modelName: "",
    modelMetadata: [],
  },
  endpoint: {
    endpointId: "",
    projectId: "",
    endpointName: "",
    endpointUrlPattern: "",
    endpointDescription: "",
  },
  tag: {
    tagId: "",
    projectId: "",
    tagName: "",
    tagDescription: "",
  },
  userStory: {
    userStoryId: "",
    projectId: "",
    userStoryDescription: "",
  },
  widget: {
    widgetId: "",
    projectId: "",
    widgetName: "",
    widgetDescription: "",
  },
  erd: {
    ERDiagramId: "",
    projectId: "",
    ERDiagramName: "",
    ERDiagramDescription: "",
    ERDiagramImageUrl: "",
  },
  wireframe: {
    wireframeId: "",
    projectId: "",
    wireframeName: "",
    wireframeDescription: "",
    wireframeImg: "",
  },
  createNewProjectForm: {
    projectName: "",
    projectDescription: "",
  },
  createNewEndpointForm: {
    endpointName: "",
    urlPattern: "",
    endpointDescription: "",
  },
  createNewModelForm: { modelName: "", modelMetadata: []},
  createNewUserStoryForm: { userStoryName: "", userStoryDescription: "" },
  createNewTagForm: { tagName: "", tagDescription: "" },
  createNewWidgetForm: { widgetName: "", widgetDescription: "" },
  createNewERDForm: { erdName: "", erdDescription: "", erdImageUrl: ""},
  createNewWireframeForm: {
    wireframeName: "",
    wireframeDescription: "",
    wireframeImageUrl: ""
  },
};

export const projectAppSlice = createSlice({
  name: "projectApp",
  initialState,
  reducers: {
    setProject: (
      state,
      action: {
        payload: {
          projectId: string;
          userId: string;
          projectName: string;
          projectDescription: string;
          projectStatus: string;
        };
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
          projectId: string;
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
          projectId: string;
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
          projectId: string;
          tagName: string;
          tagDescription: string;
        };
      }
    ) => {
      console.log("Dispatching setTag reducer with action: ", action);
      state.tag = action.payload;
    },

    setModel: (
      state,
      action: {
        payload: {
          modelId: string;
          projectId: string;
          modelName: string;
          modelMetadata: Array<{
            key: string;
            value: string;
          }>;
        };
      }
    ) => {
      console.log("Dispatching setModel reducer with action:", action);
      state.model = action.payload;
    },

    setERDiagram: (
      state,
      action: {
        payload: {
          ERDiagramId: string;
          projectId: string;
          ERDiagramName: string;
          ERDiagramDescription: string;
          ERDiagramImageUrl: string;
        };
      }
    ) => {
      console.log("Dispatching setModel reducer with action:", action);
      state.erd = action.payload;
    },

    setWireframe: (
      state,
      action: {
        payload: {
          wireframeId: string;
          projectId: string;
          wireframeName: string;
          wireframeDescription: string;
          wireframeImg: string;
        };
      }
    ) => {
      console.log("Dispatching setModel reducer with action:", action);
      state.wireframe = action.payload;
    },

    setWidget: (
      state,
      action: {
        payload: {
          widgetId: string;
          projectId: string;
          widgetName: string;
          widgetDescription: string;
        };
      }
    ) => {
      console.log("Dispatching setProject reducer with aciton: ", action);
      state.widget = action.payload;
    },

    setProjects: (
      state,
      action: {
        payload: Array<{
            projectId: string;
            userId: string;
            projectName: string;
            projectDescription: string;
            projectStatus: string;
        }>;
      }
    ) => {
      console.log("Dispatching setProject reducer with aciton: ", action);
      state.projects = action.payload;
    },

    setEndpoints: (
      state,
      action: {
        payload: Array<{
            endpointId: string;
            projectId: string;
            endpointName: string;
            endpointUrlPattern: string;
            endpointDescription: string;
        }>;
      }
    ) => {
      console.log("Dispatching setProject reducer with aciton: ", action);
      state.endpoints = action.payload;
    },

    setUserStories: (
      state,
      action: {
        payload: Array<{
            userStoryId: string;
            projectId: string;
            userStoryDescription: string;
        }>;
      }
    ) => {
      console.log("Dispatching setProject reducer with aciton: ", action);
      state.userStories = action.payload;
    },

    setModels: (
      state,
      action: {
        payload: Array<{

            modelId: string;
            projectId: string;
            modelName: string;
            modelMetadata: Array<{
              // index signature https://basarat.gitbook.io/typescript/type-system/index-signatures
              key: string;
              value: string;
            }>;
        }>;
      }
    ) => {
      console.log("Dispatching setProject reducer with aciton: ", action);
      state.models = action.payload;
    },

    setTags: (
      state,
      action: {
        payload: Array<{
            tagId: string;
            projectId: string;
            tagName: string;
            tagDescription: string;
        }>;
      }
    ) => {
      console.log("Dispatching setProject reducer with aciton: ", action);
      state.tags = action.payload;
    },

    setERDiagrams: (
      state,
      action: {
        payload: Array<{
            ERDiagramId: string;
            projectId: string;
            ERDiagramName: string;
            ERDiagramDescription: string;
            ERDiagramImageUrl: string;
        }>;
      }
    ) => {
      console.log("Dispatching setProject reducer with aciton: ", action);
      state.erds = action.payload;
    },

    setWireframes: (
      state,
      action: {
        payload: Array<{
            wireframeId: string;
            projectId: string;
            wireframeName: string;
            wireframeDescription: string;
            wireframeImg: string;
        }>;
      }
    ) => {
      console.log("Dispatching setProject reducer with aciton: ", action);
      state.wireframes = action.payload;
    },

    setWidgets: (
      state,
      action: {
        payload: Array<{
            widgetId: string;
            projectId: string;
            widgetName: string;
            widgetDescription: string;
        }>;
      }
    ) => {
      console.log("Dispatching setProject reducer with aciton: ", action);
      state.widgets = action.payload;
    },

    setCreateNewProjectForm: (     
      state,
      action: {
        payload: {
          fieldName: string;
          value: string;
        };
      }
    ) => {
      const fieldName = action.payload.fieldName;
      const value = action.payload.value;
      state.createNewProjectForm = {
        ...state.createNewProjectForm, 
        [fieldName]: value,
      }
    },

    setCreateNewEndpointForm: (
      state,
      action: {
        payload: {
          fieldName: string;
          value: string;
        };
      }
    ) => {
      const fieldName = action.payload.fieldName;
      const value = action.payload.value;
      console.log(`Setting ${fieldName} to ${value}`);
      state.createNewEndpointForm = {
        ...state.createNewEndpointForm,
        [fieldName]: value,
      };
    },

    setCreateNewModelForm: (
      state,
      action: {
        payload: {
          fieldName: string;
          value: string;
        };
      }
    ) => {
      const fieldName = action.payload.fieldName;
      const value = action.payload.value;
      console.log(`Setting ${fieldName} to ${value}`);
      state.createNewModelForm = {
        ...state.createNewModelForm,
        [fieldName]: value,
      };
    },

    setCreateNewUserStoryForm: (
      state,
      action: {
        payload: {
          fieldName: string;
          value: string;
        };
      }
    ) => {
      const fieldName = action.payload.fieldName;
      const value = action.payload.value;
      console.log(`Setting ${fieldName} to ${value}`);
      state.createNewUserStoryForm = {
        ...state.createNewUserStoryForm,
        [fieldName]: value,
      };
    },

    setCreateNewTagForm: (
      state,
      action: {
        payload: {
          fieldName: string;
          value: string;
        };
      }
    ) => {
      const fieldName = action.payload.fieldName;
      const value = action.payload.value;
      console.log(`Setting ${fieldName} to ${value}`);
      state.createNewTagForm = {
        ...state.createNewTagForm,
        [fieldName]: value,
      };
    },

    //Bookmark for later - need to know how to upload photos
    setCreateNewERDForm: (
      state,
      action: {
        payload: {
          fieldName: string;
          value: string;
        };
      }
    ) => {
      const fieldName = action.payload.fieldName;
      const value = action.payload.value;
      console.log(`Setting ${fieldName} to ${value}`);
      state.createNewERDForm = {
        ...state.createNewERDForm,
        [fieldName]: value,
      };
    },

    //Bookmark for later - need to know how to upload photos
    setCreateNewWireframeForm: (
      state,
      action: {
        payload: {
          fieldName: string;
          value: string;
        };
      }
    ) => {
      const fieldName = action.payload.fieldName;
      const value = action.payload.value;
      console.log(`Setting ${fieldName} to ${value}`);
      state.createNewWireframeForm = {
        ...state.createNewWireframeForm,
        [fieldName]: value,
      };
    },

    setCreateNewWidgetForm: (
      state,
      action: {
        payload: { fieldName: string; value: string };
      }
    ) => {
      const fieldName = action.payload.fieldName;
      const value = action.payload.value;
      console.log(`Setting ${fieldName} to ${value}`);
      state.createNewWidgetForm = {
        ...state.createNewWidgetForm,
        [fieldName]: value,
      };
    },

    setWireframeImageInForm: (
      state,
      action: {
        payload: {
          type: string,
          value: string;
        };
      }
    ) => {
      const imgData = action.payload.value;
      state.createNewWireframeForm.wireframeImageUrl = imgData;
    },

    setERDImageInForm: (
      state,
      action: {
        payload: {
          type: string;
          value: string;
        };
      }
    ) => {
      const imgData = action.payload.value;
      state.createNewERDForm.erdImageUrl = imgData;
    },

    resetCreateNewWidgetForm: (state) => {
      state.createNewWidgetForm.widgetName = "";
      state.createNewWidgetForm.widgetDescription = "";
    },

    resetCreateNewTagForm: (state) => {
      state.createNewTagForm.tagName = "";
      state.createNewTagForm.tagDescription = "";
    },

    resetCreateNewEndpointForm: (state) =>{
      state.createNewEndpointForm.endpointName = "";
      state.createNewEndpointForm.endpointDescription = "";
      state.createNewEndpointForm.urlPattern = "";
    },

    resetCreateNewModelForm: (state) =>{
      state.createNewModelForm.modelName = "";
      state.createNewModelForm.modelMetadata = [];
    },

    resetCreateNewUserStoryForm: (state) =>{
      state.createNewUserStoryForm.userStoryDescription = "";
    },

    resetCreateNewWireframeForm: (state) => {
      state.createNewWireframeForm.wireframeDescription = "";
      state.createNewWireframeForm.wireframeName = "";
      state.createNewWireframeForm.wireframeImageUrl = "";
    },

    resetCreateNewERDiagramForm: (state) => {
      state.createNewERDForm.erdName = "";
      state.createNewERDForm.erdDescription = "";
      state.createNewERDForm.erdImageUrl = "";
    },

    resetCreateNewProjectForm: (state)=> {
      state.createNewProjectForm.projectDescription = "";
      state.createNewProjectForm.projectName = ""
    }
  },
  extraReducers : (builder) => {

    //GET
    builder.addCase(
      getAllProjects.fulfilled,
      (state, action) => {
        console.log("Dispatching getAllProjects reducer with action: ", action);
        state.projects = action.payload;
        return state;
      }
    )

    builder.addCase(
      getAllWidgets.fulfilled,
      (state, action) => {
        console.log("Dispatching getAllWidgets reducer with action: ", action);
        state.widgets = action.payload;
        return state;
      }
    )

    builder.addCase(
      getAllWireframes.fulfilled,
      (state, action) => {
        console.log("Dispatching getAllWireframes reducer with action: ", action);
        state.wireframes = action.payload;
        return state;
      }
    )

    builder.addCase(
      getAllERDs.fulfilled,
      (state, action) => {
        console.log("Dispatching getAllERDs reducer with action: ", action);
        state.erds = action.payload;
        return state;
      }
    )

    builder.addCase(
      getAllEndpoints.fulfilled,
      (state, action) => {
        console.log("Dispatching getAllEndpoints reducer with action: ", action);
        state.endpoints = action.payload;
        return state;
      }
    )

    builder.addCase(
      getAllTags.fulfilled,
      (state, action) => {
        console.log("Dispatching getAllTags reducer with action: ", action);
        state.tags = action.payload;
        return state;
      }
    )

    builder.addCase(
      getAllModels.fulfilled,
      (state, action) => {
        console.log("Dispatching getAllModels reducer with action: ", action);
        state.models = action.payload;
        return state;
      }
    )

    builder.addCase(
      getAllUserStories.fulfilled,
      (state, action) => {
        console.log("Dispatching getAllUserStories reducer with action: ", action);
        state.userStories = action.payload;
        return state;
      }
    )

    //CREATE   
    builder.addCase(
      createProject.fulfilled,
      (state, action) => {
        console.log("Dispatching createProject reducer with action: ", action);
        state.projects.push(action.payload);
        return state;
      }
    )

    builder.addCase(
      createWidget.fulfilled,
      (state, action) => {
        console.log("Dispatching createWidget reducer with action: ", action);
        state.widgets = action.payload;
        return state;
      }
    )

    builder.addCase(
      createWireframe.fulfilled,
      (state, action) => {
        console.log("Dispatching createWireframe reducer with action: ", action);
        state.wireframes = action.payload;
        return state;
      }
    )

    builder.addCase(
      createERD.fulfilled,
      (state, action) => {
        console.log("Dispatching createERD reducer with action: ", action);
        state.erds = action.payload;
        return state;
      }
    )

    builder.addCase(
      createModel.fulfilled,
      (state, action) => {
        console.log("Dispatching createModel reducer with action: ", action);
        state.models = action.payload;
        return state;
      }
    )

    builder.addCase(
      createUserStory.fulfilled,
      (state, action) => {
        console.log("Dispatching createUserStory reducer with action: ", action);
        state.userStories = action.payload;
        return state;
      }
    )

    builder.addCase(
      createTag.fulfilled,
      (state, action) => {
        console.log("Dispatching createTag reducer with action: ", action);
        state.tags = action.payload;
        return state;
      }
    )

    builder.addCase(
      createEndpoint.fulfilled,
      (state, action) => {
        console.log("Dispatching createEndpoint reducer with action: ", action);
        state.endpoints = action.payload;
        return state;
      }
    )

    //DELETE

    builder.addCase(
      deleteWireframe.fulfilled,
      (state,action) => {
        console.log("Dispatching deleteWireframe reducer with action: ", action);
        state.wireframes = action.payload;
        return state;
      }
    )

    builder.addCase(
      deleteERD.fulfilled,
      (state,action) => {
        console.log("Dispatching deleteERD reducer with action: ", action);
        state.erds = action.payload;
        return state;
      }
    )
        
    builder.addCase(
      deleteEndpoint.fulfilled,
      (state,action) => {
        console.log("Dispatching deleteEndpoint reducer with action: ", action);
        state.endpoints = action.payload;
        return state;
      }
    )
        
    builder.addCase(
      deleteModel.fulfilled,
      (state,action) => {
        console.log("Dispatching deleteModel reducer with action: ", action);
        state.models = action.payload;
        return state;
      }
    )
        
    builder.addCase(
      deleteTag.fulfilled,
      (state,action) => {
        console.log("Dispatching deleteTag reducer with action: ", action);
        state.tags = action.payload;
        return state;
      }
    )
        
    builder.addCase(
      deleteUserStory.fulfilled,
      (state,action) => {
        console.log("Dispatching deleteUserStory reducer with action: ", action);
        state.userStories = action.payload;
        return state;
      }
    )
  }
});

export const {
  setWidgets,
  setProjects,
  setEndpoints,
  setModels,
  setTags,
  setERDiagrams,
  setWireframes,
  setUserStories,
  setProject,
  setModel,
  setEndpoint,
  setWidget,
  setUserStory,
  setTag,
  setWireframe,
  setERDiagram,
  setERDImageInForm,
  setWireframeImageInForm,
  setCreateNewEndpointForm,
  setCreateNewModelForm,
  setCreateNewWidgetForm,
  setCreateNewERDForm,
  setCreateNewWireframeForm,
  setCreateNewTagForm,
  setCreateNewUserStoryForm,
  setCreateNewProjectForm,
  resetCreateNewWidgetForm,
  resetCreateNewTagForm,
  resetCreateNewEndpointForm,
  resetCreateNewModelForm,
  resetCreateNewUserStoryForm,
  resetCreateNewWireframeForm,
  resetCreateNewERDiagramForm,
  resetCreateNewProjectForm,
} = projectAppSlice.actions;

export const selectProjectApp = (state: RootState) => state.projectApp;

export default projectAppSlice.reducer;
