import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Category() {
  const { id } = useParams();
  console.log(id);
  return (
    <div class="category-box">
      <div class="has-text-centered is-size-5 has-text-weight-bold">
        <p class="category-box-text">Category </p>
      </div>

      <div class="mt-5 ml-2 is-size-6">
        <Link
          to={"/category/1"}
          class="category-box-text-content has-text-weight-semibold"
        >
          Books
        </Link>
        <p>
          <Link
            to={"/category/2"}
            class="category-box-text-content has-text-weight-semibold"
          >
            Coffe Mugs
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Category;
