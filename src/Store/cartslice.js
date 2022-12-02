import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  Cartitem: [],
};
export const CartSlice = createSlice({
  initialState,
  name: "CartSlice",
  reducers: {
    addtocart: (state, action) => {
      const itemindex = state.Cartitem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemindex >= 0) {
        state.Cartitem[itemindex].cartQuantity += 1;
        toast.info("New item added successfully", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        const tempproduct = { ...action.payload, cartQuantity: 1 };
        state.Cartitem.push(tempproduct);
        toast.info("added to cart successfully", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    },
    removefromcart: (state, action) => {
      state.Cartitem.map((cartitem) => {
        if (cartitem.id === action.payload.id) {
          const Theitem = state.Cartitem.filter(
            (item) => item.id !== cartitem.id
          );
          state.Cartitem = Theitem;
        }
      });
    },
    clearthecart: (state, action) => {
      const Cart = [];
      state.Cartitem = Cart;
    },

    incre: (state, action) => {
      const itemindex = state.Cartitem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemindex >= 0) {
        state.Cartitem[itemindex].cartQuantity += 1;
      }
    },
    decre: (state, action) => {
      const itemindex = state.Cartitem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.Cartitem[itemindex].cartQuantity > 1) {
        state.Cartitem[itemindex].cartQuantity -= 1;
      }
    },
  },
});
export const { addtocart, removefromcart, clearthecart, incre, decre } =
  CartSlice.actions;
export default CartSlice.reducer;
