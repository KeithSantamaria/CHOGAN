import {

  createSlice,

  //  PayloadAction
} from "@reduxjs/toolkit";

import {
  RootState,
  //  AppThunk
} from "./store";

export interface ProjectAppState {
  projects: Array<{
    project: {
      projectId: string;
      projectName: string;
      projectDescription: string;
      projectStatus: string;
    };
  }>;
  models: Array<{
    model: {
      modelId: string;
      projectId: string;
      modelName: string;
      modelMetadata: Array<{
        // index signature https://basarat.gitbook.io/typescript/type-system/index-signatures
        key: string;
        value: string;
      }>;
    };
  }>;
  endpoints: Array<{
    endpoint: {
      endpointId: string;
      projectId: string;
      endpointName: string;
      endpointUrlPattern: string;
      endpointDescription: string;
    };
  }>;
  tags: Array<{
    tag: {
      tagId: string;
      projectId: string;
      tagName: string;
      tagDescription: string;
    };
  }>;
  userStories: Array<{
    userStory: {
      userStoryId: string;
      projectId: string;
      userStoryDescription: string;
    };
  }>;
  widgets: Array<{
    widget: {
      widgetId: string;
      projectId: string;
      widgetName: string;
      widgetDescription: string;
    };
  }>;
  wireframes: Array<{
    wireframe: {
      wireframeId: string;
      projectId: string;
      wireframeName: string;
      wireframeDescription: string;
      wireframeImg: string;
    };
  }>;
  ERDiagrams: Array<{
    ERDiagram: {
      ERDiagramId: string;
      projectId: string;
      ERDiagramName: string;
      ERDiagramDescription: string;
      ERDiagramImg: string;
    };
  }>;
  project: {
    projectId: string;
    projectName: string;
    projectDescription: string;
    projectStatus: string;
  };
  model: {
    modelId: string;
    projectId: string;
    modelName: string;
    modelMetadata: Array<{
      // index signature https://basarat.gitbook.io/typescript/type-system/index-signatures
      key: string;
      value: string;
    }>;
  };
  endpoint: {
    endpointId: string;
    projectId: string;
    endpointName: string;
    endpointUrlPattern: string;
    endpointDescription: string;
  };
  tag: {
    tagId: string;
    projectId: string;
    tagName: string;
    tagDescription: string;
  };
  userStory: {
    userStoryId: string;
    projectId: string;
    userStoryDescription: string;
  };
  widget: {
    widgetId: string;
    projectId: string;
    widgetName: string;
    widgetDescription: string;
  };
  wireframe: {
    wireframeId: string;
    projectId: string;
    wireframeName: string;
    wireframeDescription: string;
    wireframeImg: string;
  };
  ERDiagram: {
    ERDiagramId: string;
    projectId: string;
    ERDiagramName: string;
    ERDiagramDescription: string;
    ERDiagramImg: string;
  };

  createNewEndpointForm: {
    endpointName: string;
    urlPattern: string;
    endpointDescription: string;
  };
  createNewModelForm: { modelName: string; modelMetadata: Array<{}> };
  createNewUserStoryForm: { userStoryDescription: string };
  createNewTagForm: { tagName: string; tagDescription: string };
  createNewWidgetForm: { widgetName: string; widgetDescription: string };
  //Bookmark for later - need to know how to upload photos
  createNewERDForm: { erdName: string; erdDescription: string; erdImg: string};
  //Bookmark for later - need to know how to upload photos
  createNewWireframeForm: {
    wireframeName: string;
    wireframeDescription: string;
    wireframeImg: string;
  };
}

const initialState: ProjectAppState = {
  projects: [],
  models: [],
  endpoints: [],
  tags: [],
  userStories: [],
  widgets: [],
  wireframes: [],
  ERDiagrams: [],
  project: {
    projectId: "",
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
  ERDiagram: {
    ERDiagramId: "",
    projectId: "",
    ERDiagramName: "",
    ERDiagramDescription: "",
    ERDiagramImg: "",
  },
  wireframe: {
    wireframeId: "",
    projectId: "",
    wireframeName: "",
    wireframeDescription: "",
    wireframeImg: "",
  },
  createNewEndpointForm: {
    endpointName: "",
    urlPattern: "",
    endpointDescription: "",
  },
  createNewModelForm: { modelName: "", modelMetadata: []},
  createNewUserStoryForm: { userStoryDescription: "" },
  createNewTagForm: { tagName: "", tagDescription: "" },
  createNewWidgetForm: { widgetName: "", widgetDescription: "" },
  //Bookmark for later - need to know how to upload photos
  createNewERDForm: { erdName: "", erdDescription: "", erdImg: ""},
  //Bookmark for later - need to know how to upload photos
  createNewWireframeForm: {
    wireframeName: "",
    wireframeDescription: "",
    wireframeImg: ""
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
          ERDiagramImg: string;
        };
      }
    ) => {
      console.log("Dispatching setModel reducer with action:", action);
      state.ERDiagram = action.payload;
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
          project: {
            projectId: string;
            projectName: string;
            projectDescription: string;
            projectStatus: string;
          };
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
          endpoint: {
            endpointId: string;
            projectId: string;
            endpointName: string;
            endpointUrlPattern: string;
            endpointDescription: string;
          };
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
          userStory: {
            userStoryId: string;
            projectId: string;
            userStoryDescription: string;
          };
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
          model: {
            modelId: string;
            projectId: string;
            modelName: string;
            modelMetadata: Array<{
              // index signature https://basarat.gitbook.io/typescript/type-system/index-signatures
              key: string;
              value: string;
            }>;
          };
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
          tag: {
            tagId: string;
            projectId: string;
            tagName: string;
            tagDescription: string;
          };
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
          ERDiagram: {
            ERDiagramId: string;
            projectId: string;
            ERDiagramName: string;
            ERDiagramDescription: string;
            ERDiagramImg: string;
          };
        }>;
      }
    ) => {
      console.log("Dispatching setProject reducer with aciton: ", action);
      state.ERDiagrams = action.payload;
    },

    setWireframes: (
      state,
      action: {
        payload: Array<{
          wireframe: {
            wireframeId: string;
            projectId: string;
            wireframeName: string;
            wireframeDescription: string;
            wireframeImg: string;
          };
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
          widget: {
            widgetId: string;
            projectId: string;
            widgetName: string;
            widgetDescription: string;
          };
        }>;
      }
    ) => {
      console.log("Dispatching setProject reducer with aciton: ", action);
      state.widgets = action.payload;
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
  setCreateNewEndpointForm,
  setCreateNewModelForm,
  setCreateNewWidgetForm,
  setCreateNewERDForm,
  setCreateNewWireframeForm,
  setCreateNewTagForm,
  setCreateNewUserStoryForm,
  resetCreateNewWidgetForm,
  resetCreateNewTagForm,
  resetCreateNewEndpointForm,
  resetCreateNewModelForm,
  resetCreateNewUserStoryForm,
  
} = projectAppSlice.actions;

export const selectProjectApp = (state: RootState) => state.projectApp;

export default projectAppSlice.reducer;
