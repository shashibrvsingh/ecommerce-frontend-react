import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./stores/Product";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
export default store;
