import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: []
    },
    reducers: {
        getProducts: (state, action) => {
            state.product.push({ ...action.payload })
        },
        incrementQuantity: (state, action) => {
            const isPresent = state.product.find((item) => item.id === action.payload.id);
            isPresent.quantity++;
        },
        decrementQuantity: (state, action) => {
            const decrementQuantity = state.product.find((item) => item.id === action.payload.id);
            if (decrementQuantity.quantity == 1) {
                decrementQuantity.quantity = 0;
                // const removeItem = state.product.filter((item) => item.id !== action.payload.id);
                // state.product = removeItem
            }
            else {
                decrementQuantity.quantity--
            }
        }
    }
});

export const { getProducts, incrementQuantity, decrementQuantity } = productSlice.actions;
export default productSlice.reducer;