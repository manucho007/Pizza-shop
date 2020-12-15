// import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';
import pizzas from '../pizzas';

// use of thunk with async pipe
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const pizza = pizzas.find((x) => x.id == id);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: pizza._id,
      name: pizza.name,
      image: pizza.image,
      price: pizza.price,
      qty,
    },
  });

  // Saving everything to localstorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
