import {
  CREATE_SHORTURL,
  CREATE_TEMP_USERID,
  START_LOADING,
  STOP_LOADING,
} from "../constants";

const initialState = {
  isLoading: false,
  url: "",
  isError: false,
  message: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SHORTURL:
      console.log("successful", action.payload);
      if (action.payload.status === "success") {
        return {
          ...state,
          url: action.payload.url,
          message: action.payload.message,
          isError: false,
        };
      }
      return {
        ...initialState,
        message: action.payload.message,
        isError: true,
      };
    case CREATE_TEMP_USERID:
      localStorage.setItem("userID", action.payload.tempToken);
      return state;
    case START_LOADING:
      return {
        ...initialState,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
