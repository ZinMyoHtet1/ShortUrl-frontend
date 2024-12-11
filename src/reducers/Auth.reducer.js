/* eslint-disable no-case-declarations */
import {
  LOGIN,
  REGISTER,
  REFRESH_TOKEN,
  LOGOUT,
  START_LOADING,
  STOP_LOADING,
} from "../constants";

const initialState = {
  isLoading: true,
  userId: "",
  accessToken: "",
  refreshToken: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case REGISTER:
    case LOGIN:
    case REFRESH_TOKEN:
      const tokens = {
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };

      localStorage.setItem(action.payload.useId, JSON.stringify(tokens));

      return {
        ...state,
        userId: action.payload.useId,
        ...tokens,
      };

    case LOGOUT:
      localStorage.clear();
      return {
        initialState,
      };

    default:
      return state;
  }
};
