import {
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
} from '../constants/authConstants';

const initialState = {
  currentUser: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
};
