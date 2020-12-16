import { HISTORY_LIST_REQUEST } from '../constants/firestoreConstants';

const initialState = {
  history: null,
};

export const firestoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case HISTORY_LIST_REQUEST:
      return {
        ...state,
        history: action.payload,
      };
    default:
      return state;
  }
};
