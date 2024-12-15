import {
  CREATE_SHORTURL,
  CREATE_TEMP_USERID,
  FETCH_BY_USERID,
  START_LOADING,
  STOP_LOADING,
} from "../constants";
import apiShortURL from "../api/ShortUrl.api.js";

export default {
  createShortUrl: (urlForm) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await apiShortURL.createShortUrl(urlForm);
      dispatch({ type: CREATE_SHORTURL, payload: data });
      dispatch({ type: STOP_LOADING });
    } catch (error) {
      console.log(error);
      dispatch({ type: STOP_LOADING });
    }
  },
  createTempUserID: () => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      console.log("start creating temp user...");
      const { data } = await apiShortURL.createTempUserID();
      dispatch({ type: CREATE_TEMP_USERID, payload: data });
      dispatch({ type: STOP_LOADING });
    } catch (error) {
      console.log(error);
      dispatch({ type: STOP_LOADING });
    }
  },
  fetchByUserID: (userID) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await apiShortURL.fetchByUserID(userID);
      dispatch({ type: FETCH_BY_USERID, payload: data });
      dispatch({ type: STOP_LOADING });
    } catch (error) {
      console.log(error);
      dispatch({ type: STOP_LOADING });
    }
  },
};
