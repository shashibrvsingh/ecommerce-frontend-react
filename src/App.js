import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./main-components/Body";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/products" element={<Body />} />
          {/* <Route exact path="/post" element={<Post />} /> */}
          <Route path="category/:id" element={<Body />} />
        </Routes>
      </Router>
    </div>
  );
}
