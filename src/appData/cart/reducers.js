import { ADD_TO_BASKET, initialState, REMOVE_TO_BASKET } from "./constants";

export const cartReducers = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_BASKET:
      state.basket.push(action.product);
      console.log(state.basket);
      return {...state};
    case REMOVE_TO_BASKET:
      state.basket.filter(item => item.id !== action.id);
      console.log(action.id);
      return {...state};
    default:
      return state;
  }
};
