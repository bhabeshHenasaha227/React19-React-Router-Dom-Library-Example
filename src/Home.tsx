import { Link, NavLink, useNavigate } from "react-router-dom";
import profilePhoto from "./assets/Bhabeshpic.jfif";

function Home() {
  const navigateTo = useNavigate();

  const goToAbout = () => {
    navigateTo("/about");
  };

  return (
    <main className="home-page">
      <section className="home-hero profile-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">UI Technical Lead · Frontend Architect</p>
          <h2 id="home-title">Hi, I&apos;m Bhabesh Saha.</h2>
          <p className="hero-description">
            I build scalable, accessible and high-performing interfaces with
            11+ years of experience across React, Angular, Next.js and
            TypeScript.
          </p>
          <button className="primary-button" onClick={goToAbout}>
            More about me
            <span aria-hidden="true">-&gt;</span>
          </button>
        </div>
        <div className="profile-visual">
          <div className="profile-ring" />
          <img src={profilePhoto} alt="Bhabesh Saha" className="profile-photo" />
          <span className="profile-badge">11+ years</span>
        </div>
      </section>

      <section className="feature-grid" aria-label="Professional strengths">
        <article className="feature-card">
          <span className="feature-number">01</span>
          <h3>Frontend architecture</h3>
          <p>Reusable component patterns, design systems and maintainable UI foundations.</p>
        </article>
        <article className="feature-card featured-card">
          <span className="feature-number">02</span>
          <h3>Technical leadership</h3>
          <p>Mentoring teams, reviewing designs and code, and guiding delivery quality.</p>
        </article>
        <article className="feature-card">
          <span className="feature-number">03</span>
          <h3>Modern engineering</h3>
          <p>Accessibility, performance, responsive design, testing and AI-assisted development.</p>
        </article>
      </section>

      <section className="user-links" aria-labelledby="profiles-title">
        <div>
          <p className="section-label">Explore dynamic routes</p>
          <h3 id="profiles-title">See different sides of my work.</h3>
        </div>
        <div className="user-link-list">
          <NavLink to="/user/10">Bhabesh Saha</NavLink>
          <NavLink to="/user/11">Frontend Architecture</NavLink>
          <NavLink to="/user/12">Technical Leadership</NavLink>
        </div>
      </section>

      <section className="page-links" aria-labelledby="page-links-title">
        <div>
          <p className="section-label">Keep exploring</p>
          <h3 id="page-links-title">Find your way around.</h3>
        </div>
        <div className="page-link-list">
          <Link to="/about" className="page-link-card">
            <span>01</span>
            <strong>About me</strong>
            <small>Experience and strengths</small>
          </Link>
          <Link to="/contact" className="page-link-card">
            <span>02</span>
            <strong>Contact</strong>
            <small>Let&apos;s start a conversation</small>
          </Link>
          <Link to="/user/10" className="page-link-card">
            <span>03</span>
            <strong>Dynamic user</strong>
            <small>See a parameterized route</small>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
