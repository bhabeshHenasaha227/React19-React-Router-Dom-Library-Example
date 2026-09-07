function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-intro" aria-labelledby="contact-title">
        <p className="eyebrow">Let&apos;s connect</p>
        <h2 id="contact-title">Have a frontend challenge in mind?</h2>
        <p>
          I&apos;m open to conversations about UI architecture, technical leadership,
          scalable frontend systems and new opportunities in Bengaluru.
        </p>
      </section>

      <section className="contact-grid" aria-label="Contact details">
        <a className="contact-card" href="mailto:bhabeshhenasaha227@gmail.com">
          <span className="contact-label">Email</span>
          <strong>bhabeshhenasaha227@gmail.com</strong>
          <span className="contact-arrow" aria-hidden="true">-&gt;</span>
        </a>
        <a className="contact-card" href="tel:+917337649639">
          <span className="contact-label">Phone</span>
          <strong>+91 7337649639</strong>
          <span className="contact-arrow" aria-hidden="true">-&gt;</span>
        </a>
        <a
          className="contact-card"
          href="https://linkedin.com/in/bhabesh-saha-746498140"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-label">LinkedIn</span>
          <strong>Connect with me</strong>
          <span className="contact-arrow" aria-hidden="true">-&gt;</span>
        </a>
      </section>

      <div className="contact-footer">
        <span>Bengaluru, India</span>
        <span>Open to Bangalore-based opportunities</span>
      </div>
    </main>
  );
}

export default Contact;
