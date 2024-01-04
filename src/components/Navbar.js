import Search from "./Search";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  return (
    <div class="has-background-danger-light p-2">
      <div class="container">
        <nav
          class="navbar has-background-danger-light"
          role="navigation"
          aria-label="main navigation"
        >
          <div class="is-flex is-align-items-center">
            <i class="fa-solid fa-shop is-size-1 has-text-success has-background-warning p-2 mr-1"></i>
            <Link to="/products" class="is-size-2 has-text-weight-bold">
              Market
            </Link>
            <p>
              <Search />
            </p>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a class="button is-light">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
