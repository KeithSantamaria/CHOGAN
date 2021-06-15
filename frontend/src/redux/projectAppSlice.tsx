import { createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { ESMap, Map } from "typescript";

import {RootState,
    //  AppThunk
  } from "./store";

export interface Model {
    modelId: string;
    modelName: string;
    projectId: string;
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
    projectId: string;
}

export interface Tag {
    tagId: string;
    tagName: string;
    tagDescription: string;
    projectId: string;
}

export interface UserStory {
    userStoryId: string;
    userStoryDescription: string;
    projectId: string;
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
      // console.log(`Setting ${fieldName} to ${value}`);
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
    }
  },
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
  
} = projectAppSlice.actions;

export const selectProjectApp = (state: RootState) => state.projectApp;

export default projectAppSlice.reducer;
