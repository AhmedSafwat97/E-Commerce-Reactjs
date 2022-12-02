import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartslice";
export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
