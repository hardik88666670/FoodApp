import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Slices/CartSlices";
import CategorySlice from "../Slices/CategorySlice.jsx"
import SearchSlice from "../Slices/SearchSlice.jsx"

const Store = configureStore({
    reducer: {
        cart: CartSlice,
        Category: CategorySlice,
        search: SearchSlice,
    },
});

export default Store