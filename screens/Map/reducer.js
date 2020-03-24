import { GET_ALL_TASK_SUCCESS, GET_ALL_TASK_FAILED } from "./action";

  export const initialmapReducer = {
    tasks: []
  };
  
  export const mapReducer = (state = initialmapReducer, action) => {
    switch (action.type) {
      case GET_ALL_TASK_SUCCESS:
        return {
          ...state,
          tasks: action.payload,
          error: null
        };
      case GET_ALL_TASK_FAILED:
        return {
          ...state,
          error: action.payload
        };  
      default:
        return state;
    }
  };