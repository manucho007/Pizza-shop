import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';
import pizzas from '../pizzas';

// use of thunk with async pipe
export const addToCart = (id, qty) => (dispatch, getState) => {
  // Just for this exercise I'll use the == instead of ===
  const pizza = pizzas.find((x) => x.id == id);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: pizza.id,
      name: pizza.name,
      image: pizza.image,
      price: pizza.price,
      qty,
    },
  });

  // Saving everything to localstorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
