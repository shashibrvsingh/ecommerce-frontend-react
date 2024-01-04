import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts, loadProductCategory } from "../stores/Product";

function Product() {
  const dispatch = useDispatch();
  const { productList } = useSelector((store) => store.product);

  const { id } = useParams();
  // console.log(id);
  useEffect(function () {
    dispatch(loadProducts());
    console.log(productList);
  }, []);

  // useEffect(
  //   function () {
  //     console.log("second");
  //     if (id) {
  //       async function fetchProductList(id) {
  //         const result = await axios.get(
  //           `http://localhost:8080/api/products/search/findByCategoryId?id=${id}`
  //         );
  //         const response = result.data._embedded.products;
  //         setProductCategoryList(response);
  //       }
  //       fetchProductList(id);
  //     }
  //   },
  //   [id]
  // );

  return (
    <div class="product-display mt-3">
      {productList.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default Product;

// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import ProductCard from "./ProductCard";

// function Product() {
//   const product = useSelector((store) => store.product.product);
//   const [productList, setProductList] = useState([]);
//   const [productCategoryList, setProductCategoryList] = useState([]);

//   const { id } = useParams();
//   console.log(id);
//   useEffect(function () {
//     console.log("first");
//     async function fetchProductList() {
//       const result = await axios.get("http://localhost:8080/api/products");
//       const response = result.data._embedded.products;
//       console.log(response);
//       setProductList(response);
//     }
//     fetchProductList();
//   }, []);

//   useEffect(
//     function () {
//       console.log("second");
//       if (id) {
//         async function fetchProductList(id) {
//           const result = await axios.get(
//             `http://localhost:8080/api/products/search/findByCategoryId?id=${id}`
//           );
//           const response = result.data._embedded.products;
//           setProductCategoryList(response);
//         }
//         fetchProductList(id);
//       }
//     },
//     [id]
//   );

//   return (
//     <div class="product-display mt-3">
//       {id
//         ? productCategoryList.map((product) => (
//             <ProductCard product={product} />
//           ))
//         : productList.map((product) => <ProductCard product={product} />)}
//     </div>
//   );
// }

// export default Product;
