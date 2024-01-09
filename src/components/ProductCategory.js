import { useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { loadProductCategory } from "../stores/Product";

function ProductCategory() {
  const dispatch = useDispatch();
  const { productCategoryList } = useSelector((store) => store.product);

  const { id } = useParams();
  // console.log(id);

  useEffect(
    function () {
      dispatch(loadProductCategory(id));
      console.log(productCategoryList);
    },
    // eslint-disable-next-line
    [id]
  );

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
      {productCategoryList.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default ProductCategory;
