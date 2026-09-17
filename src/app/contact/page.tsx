import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1 className="display-text">Let&apos;s talk.</h1>
          <p className="body-large">Visit us, call us, or tell us about your plot.</p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Left — Contact Details */}
            <div className={styles.contactDetails}>
              <div className={styles.detailBlock}>
                <h4>Phone</h4>
                <a href="tel:+917386858421" className={styles.contactLink}>+91 73868 58421</a>
              </div>
              <div className={styles.detailBlock}>
                <h4>WhatsApp</h4>
                <a
                  href="https://wa.me/917386858421?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20construction%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  Chat on WhatsApp →
                </a>
              </div>
              <div className={styles.detailBlock}>
                <h4>Email</h4>
                <a href="mailto:info@suciconstructions.com" className={styles.contactLink}>
                  info@suciconstructions.com
                </a>
              </div>
              <div className={styles.detailBlock}>
                <h4>Office</h4>
                <address className={styles.address}>
                  2-4-216, Road No. 9A,<br />
                  Snehapuri Colony, New Nagole,<br />
                  Hyderabad 500035
                </address>
              </div>
              <div className={styles.detailBlock}>
                <h4>Hours</h4>
                <p>Monday – Saturday, 9:30 am – 6:30 pm</p>
                <p className={styles.closedNote}>Closed on Sundays and public holidays</p>
              </div>

              <div className={styles.detailBlock}>
                <h4>Directions</h4>
                <p>5 minutes by auto from Nagole Metro Station towards Snehapuri Colony.</p>
              </div>
            </div>

            {/* Right — Enquiry Form */}
            <div className={styles.contactForm}>
              <h3>Send an enquiry</h3>
              <p className={styles.formSubtitle}>We reply within one working day. For urgent matters, call us directly.</p>
              <form className={styles.form} action="#" method="POST">
                {/* Honeypot anti-spam field */}
                <input type="text" name="_honeypot" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full name *</label>
                    <input type="text" id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone (+91) *</label>
                    <input type="tel" id="phone" name="phone" placeholder="10-digit mobile number" required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="projectType">Project type *</label>
                  <select id="projectType" name="projectType" required>
                    <option value="">Select a project type</option>
                    <option value="house">Independent House</option>
                    <option value="villa">Villa</option>
                    <option value="apartment">Apartment</option>
                    <option value="commercial">Commercial Building</option>
                    <option value="peb">PEB / Industrial</option>
                    <option value="interior">Interior Design</option>
                    <option value="renovation">Renovation</option>
                    <option value="other">Other / Not sure yet</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="location">Plot location</label>
                  <input type="text" id="location" name="location" placeholder="Area or locality in Hyderabad" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project, budget, or timeline..."
                  ></textarea>
                </div>
                <div className={styles.formConsent}>
                  <input type="checkbox" id="consent" name="consent" required />
                  <label htmlFor="consent">
                    I agree to SUCI Constructions contacting me about my enquiry.
                  </label>
                </div>
                <button type="submit" className={styles.submitButton}>
                  Send enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.122!2d78.5566!3d17.3766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98c0!2sSnehapuri+Colony%2C+New+Nagole%2C+Hyderabad!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SUCI Constructions Office Location"
        ></iframe>
      </section>
    </>
  );
}
