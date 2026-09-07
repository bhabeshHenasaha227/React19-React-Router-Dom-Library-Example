import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <main className="not-found-page">
      <section className="not-found-card" aria-labelledby="not-found-title">
        <span className="not-found-code">404</span>
        <p className="eyebrow">Route not found</p>
        <h2 id="not-found-title">This page took a wrong turn.</h2>
        <p>
          There is no page at <strong>{location.pathname}</strong>. Let&apos;s get
          you back to something useful.
        </p>
        <Link className="primary-button" to="/">
          Back to Home <span aria-hidden="true">-&gt;</span>
        </Link>
      </section>
    </main>
  );
}

export default NotFound;