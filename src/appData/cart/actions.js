import { ADD_TO_BASKET, REMOVE_TO_BASKET } from "./constants";

export const addToBasketAction = product => {
  return {
    type: ADD_TO_BASKET,
    product,
  };
};

export const removeToBasketAction = id => {
  return {
    type: REMOVE_TO_BASKET,
    id,
  };
};
