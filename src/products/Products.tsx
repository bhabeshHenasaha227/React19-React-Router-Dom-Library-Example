import { NavLink, Outlet } from "react-router-dom";
import heroImage from "../assets/hero.png";

function Products() {
  return (
    <main className="products-page">
      <section className="products-hero" aria-labelledby="products-title">
        <div>
          <p className="eyebrow">Curated tech essentials</p>
          <h2 id="products-title">Tools made for the way you work.</h2>
          <p>
            Explore a small collection of reliable devices for focused work,
            creative thinking and everyday momentum.
          </p>
        </div>
        <img src={heroImage} alt="Abstract layered technology shape" />
      </section>

      <nav className="product-tabs" aria-label="Product categories">
        <NavLink to="phone">Phone</NavLink>
        <NavLink to="laptop">Laptop</NavLink>
      </nav>

      <Outlet />
    </main>
  );
}

export default Products;
