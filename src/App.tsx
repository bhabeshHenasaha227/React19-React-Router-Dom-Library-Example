import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import User from "./User";
import NotFound from "./NotFound";
import "./App.css";
import Products from "./products/Products";
import Phone from "./products/Phone";
import Laptop from "./products/Laptop";

function App() {
  return (
    <BrowserRouter>
      <h1>React Router Example </h1>
      {/* <div>
        <a href="/">Home</a>|
        <a href="/about">About</a>|
        <a href="/contact">Contact</a>
      </div> */}
      <nav className="site-nav" aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/user/10">User</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/products" element={<Products />}>
          <Route path="phone" element={<Phone />} />
          <Route path="laptop" element={<Laptop />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
