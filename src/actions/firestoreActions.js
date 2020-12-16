import {
  SUBMIT_ORDER_AUTH,
  SUBMIT_ORDER_UNAUTH,
  HISTORY_LIST_REQUEST,
} from '../constants/firestoreConstants';
import { createOrderDoc, fetchHistoryDocs } from '../configs/firebase.config';
export const submitOrderUnAuth = () => ({ type: SUBMIT_ORDER_UNAUTH });

export const submitOrderAuth = ({
  currentUser,
  cartItems,
  totalPrice,
  contactInfo,
}) => (dispatch) => {
  createOrderDoc({ currentUser, cartItems, totalPrice, contactInfo });
  dispatch({ type: SUBMIT_ORDER_AUTH });
};

export const fetchHistory = (currentUser) => async (dispatch) => {
  const history = await fetchHistoryDocs(currentUser);
  dispatch({
    type: HISTORY_LIST_REQUEST,
    payload: history,
  });
};
