import { createSelector } from "reselect";

const cartState = (state) => state.cartReducer;

const cartItems = (cartReducer) => cartReducer.cartItems;

export const makeCartItems = createSelector(cartState, cartItems);
