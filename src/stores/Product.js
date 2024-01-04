import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  productList: [],
  productCategoryList:[]
  // loan: 0,
  // loanPurpose: "",
  // isLoading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProductsList(state, action) {
      console.log("first");
      state.productList = action.payload;
    },
    loadProductCategoryList(state, action) {
      console.log("second");
      state.productCategoryList = action.payload;
    },
  },
});
export const { loadProductsList, loadProductCategoryList } =
  productSlice.actions;

export function loadProducts() {
  console.log("first");
  return async function fetchProductList(dispatch) {
    const result = await axios.get("http://localhost:8080/api/products");
    const response = result.data._embedded.products;
    console.log("second");
    dispatch({ type: "product/loadProductsList", payload: response });
    // return { type: "product/loadProductsList", payload: response };
  };
}

export function loadProductCategory(id) {
  console.log("second");
  console.log(id);
  return async function fetchProductLists(dispatch) {
    const result = await axios.get(
      `http://localhost:8080/api/products/search/findByCategoryId?id=${id}`
    );
    const response = result.data._embedded.products;
    dispatch({ type: "product/loadProductCategoryList", payload: response });
  };
}

// state.balance = state.balance + action.payload;
// state.isLoading = false;
// export function deposit(amount, currency) {
//   if (currency === "USD") return { type: "account/deposit", payload: amount };
//   return async function (dispatch, getState) {
//     // API call
//     dispatch({ type: "account/convertingCurrency" });
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );

//     const data = await res.json();
//     const converted = data.rates.USD;

//     console.log(data);
//     // return
//     return { type: "account/deposit", payload: converted };
//   };
// }

export default productSlice.reducer;

// console.log(productSlice);

// console.log("first");
// async function fetchProductList() {
//   const result = await axios.get("http://localhost:8080/api/products");
//   const response = result.data._embedded.products;
//   console.log(response);
//   setProductList(response);
// }
// fetchProductList();
