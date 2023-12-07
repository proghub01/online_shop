import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';
import productsData from './productsData';

const initialState = {
  products: productsData,
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      alert("Product added to cart");
      const newItem = action.payload;
      const itemInCart = state.cart.find(item => item.name === newItem.name);

      if (itemInCart) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.name === newItem.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...newItem, quantity: 1 }],
        };
      }

      case REMOVE_FROM_CART:
        const removedItemName = action.payload;
        return {
          ...state,
          cart: state.cart.filter(item => item.name !== removedItemName),
        };

    default:
      return state;
  }
};

export default rootReducer;
