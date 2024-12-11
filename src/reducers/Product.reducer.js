import {
  START_LOADING,
  STOP_LOADING,
  GET_ALL_PRODUCT,
  GET_PRODUCT_BY_ID,
  POST_PRODUCT,
  DELETE_PRODUCT,
} from "../constants";

const initialState = {
  isLoading: true,
  products: [],
  product: {},
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

    case GET_ALL_PRODUCT:
    case POST_PRODUCT:
    case DELETE_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};
