export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart  = (product) => ({
    type: ADD_TO_CART,
    payload: product,
})


export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const removeFromCart = (productName) => ({
  type: REMOVE_FROM_CART,
  payload: productName,
});