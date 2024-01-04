import Navbar from "../components/Navbar";
import Category from "../components/Category";
import Product from "../components/Product";
import ProductCategory from "../components/ProductCategory";
import { useParams } from "react-router-dom";
function Body() {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="columns">
          <div className="column is-one-fifth">
            <Category />
          </div>
          <div className="column auto">
            {id ? <ProductCategory /> : <Product />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
