import { Link } from "react-router-dom";

function Phone() {
  return (
    <section className="product-detail phone-detail" aria-labelledby="phone-title">
      <div className="product-photo-frame">
        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85"
          alt="Modern smartphone resting on a surface"
        />
        <span className="product-badge">Best seller</span>
      </div>
      <div className="product-copy">
        <p className="section-label">Pocket powerhouse</p>
        <h2 id="phone-title">Nova X1</h2>
        <p className="product-tagline">Bright ideas, right in your hand.</p>
        <p>
          A sleek everyday phone with a vivid display, dependable battery life
          and a camera ready for the moments worth keeping.
        </p>
        <div className="product-specs">
          <span>6.5&quot; display</span>
          <span>256 GB storage</span>
          <span>48 MP camera</span>
        </div>
        <div className="product-action-row">
          <strong>$699</strong>
          <Link className="primary-button" to="/contact">
            Ask about it <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Phone;
