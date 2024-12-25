import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addtocart: (state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            if (itemPresent) {
                itemPresent.quantity++;
            }
            else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }
        },
        removeFromCart: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id)
            state.cart = removeItem
        },
        incrementQty: (state, action) => {
            const increment = state.cart.find((item) => item.id === action.payload.id)
            increment.quantity++;
        },
        decrementQty: (state, action) => {
            const decrement = state.cart.find((item) => item.id === action.payload.id);
            if (decrement.quantity == 1) {
                decrement.quantity = 0;
                const removeItem = state.cart.filter((item) => item.id !== action.payload.id)
                state.cart = removeItem
            }
            else {
                decrement.quantity--;
            }
        }
    }
});

export const { addtocart, removeFromCart, incrementQty, decrementQty } = CartSlice.actions
export default CartSlice.reducer