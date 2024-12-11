import { GET_ALL_PRODUCT, START_LOADING, STOP_LOADING } from "../constants";

import api from "../api/Product.api.js";

export default {
  getAll: () => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.getAll();
      dispatch({ type: GET_ALL_PRODUCT, payload: data });
      dispatch({ type: STOP_LOADING });
    } catch (error) {
      console.log(error);
      dispatch({ type: STOP_LOADING });
    }
  },
};
