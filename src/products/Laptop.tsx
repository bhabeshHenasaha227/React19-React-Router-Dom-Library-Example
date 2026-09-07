import { Link } from "react-router-dom";

function Laptop() {
  return (
    <section className="product-detail laptop-detail" aria-labelledby="laptop-title">
      <div className="product-photo-frame">
        <img
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1100&q=85"
          alt="Open laptop on a desk"
        />
        <span className="product-badge">Editor&apos;s pick</span>
      </div>
      <div className="product-copy">
        <p className="section-label">Built to go further</p>
        <h2 id="laptop-title">Orbit Pro 14</h2>
        <p className="product-tagline">Serious performance, beautifully contained.</p>
        <p>
          A lightweight laptop for deep work, design reviews and long creative
          sessions, with enough power to keep ambitious ideas moving.
        </p>
        <div className="product-specs">
          <span>14&quot; Retina display</span>
          <span>16 GB memory</span>
          <span>18 hr battery</span>
        </div>
        <div className="product-action-row">
          <strong>$1,299</strong>
          <Link className="primary-button" to="/contact">
            Ask about it <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Laptop;
