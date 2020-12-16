import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  SUBMIT_ORDER_AUTH,
  SUBMIT_ORDER_UNAUTH,
} from '../constants/cartConstants';

const initialState = {
  cartItems: [],
  qtyItems: 0,
  subTotal: 0,
  totalPrice: 0,
};

export const cartReducer = (state = initialState, action) => {
  const item = action.payload;
  switch (action.type) {
    case CART_ADD_ITEM:
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== item),
      };
    case SUBMIT_ORDER_AUTH:
      return {
        ...state,
        cartItems: [],
        qtyItems: 0,
        totalPrice: 0,
      };
    case SUBMIT_ORDER_UNAUTH:
      return {
        ...state,
      };
    default:
      return state;
  }
};
