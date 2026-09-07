function About() {
  return (
    <main className="about-page">
      <section className="about-intro" aria-labelledby="about-title">
        <div className="about-heading">
          <p className="eyebrow">About Bhabesh Saha</p>
          <h2 id="about-title">I turn complex product needs into clear, scalable interfaces.</h2>
        </div>
        <p className="about-lead">
          UI Technical Lead and frontend architect based in Bengaluru, India.
        </p>
      </section>

      <section className="about-layout">
        <article className="about-story">
          <p className="section-label">My experience</p>
          <h3>11+ years of frontend engineering.</h3>
          <p>
            I have led frontend architecture and UI engineering across financial
            services, healthcare, enterprise CMS, IoT, EdTech and e-commerce.
          </p>
          <p>
            My work spans React, Angular, Next.js and TypeScript, with a focus on
            reusable components, accessibility, performance and responsive design.
          </p>
        </article>

        <aside className="about-summary" aria-label="My current focus">
          <p className="section-label">My toolkit</p>
          <div className="summary-row">
            <strong>01</strong>
            <span>React · Next.js</span>
          </div>
          <div className="summary-row">
            <strong>02</strong>
            <span>Angular · TypeScript</span>
          </div>
          <div className="summary-row">
            <strong>03</strong>
            <span>Design systems · A11y</span>
          </div>
        </aside>
      </section>

      <section className="principles" aria-labelledby="values-title">
        <div className="principles-heading">
          <p className="section-label">What I bring</p>
          <h3 id="values-title">How I create impact</h3>
        </div>
        <div className="principle-grid">
          <article className="principle-card">
            <span>01</span>
            <h4>Architecture</h4>
            <p>I create frontend foundations that stay clear as products grow.</p>
          </article>
          <article className="principle-card">
            <span>02</span>
            <h4>Leadership</h4>
            <p>I mentor engineers and align product, UX, QA and engineering teams.</p>
          </article>
          <article className="principle-card">
            <span>03</span>
            <h4>Quality</h4>
            <p>I care about accessibility, testability, performance and user experience.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default About;
