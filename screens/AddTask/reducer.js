import { ADD_TASK, ADD_TASK_SUCCESS, ADD_TASK_FAILED } from "./action";

  export const initialaddTaskReducer = {
    loading: false,
    success: false,
  };
  
  export const addTaskReducer = (state = initialaddTaskReducer, action) => {
    switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          loading: true,
          success:false
        };
      case ADD_TASK_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          success:true
        };
      case ADD_TASK_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload,
          success:false
        }; 
      default:
        return state;
    }
  };