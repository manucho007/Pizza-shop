import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';
import pizzas from '../pizzas';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: pizzas,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listProductDetails = (id) => (dispatch) => {
  // Just for this exercise I'll use the == instead of ===
  const pizza = pizzas.find((x) => x.id == id);
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: pizza,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
