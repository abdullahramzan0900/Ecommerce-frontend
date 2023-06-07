import { cartTypeAction } from "./cartType";

export const setCartItems = (cartItems) => ({
  type: cartTypeAction.SET_CART_ITEMS,
  payload: cartItems,
});
