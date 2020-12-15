import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_DECREASE_QTY,
  CART_INCREASE_QTY,
} from '../constants/cartConstants';
import pizzas from '../pizzas';

// use of thunk with async pipe
export const addToCart = (id, qty) => (dispatch, getState) => {
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

// export const decreaseQty = (id) => (dispatch, getState) => {
//   dispatch({
//     type: CART_DECREASE_QTY,
//     payload: id,
//   });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

// export const increaseQty = (id) => (dispatch, getState) => {
//   dispatch({
//     type: CART_INCREASE_QTY,
//     payload: id,
//   });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };
