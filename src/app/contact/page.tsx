import type { Metadata } from "next";
import Script from "next/script";
import styles from "./page.module.css";
import Breadcrumbs from "@/components/Breadcrumbs";

import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: "Contact SUCI Constructions | Nagole, Hyderabad",
  description: "Call +91 73868 58421 or visit SUCI Constructions in New Nagole, Hyderabad. Free consultation, and an engineer visits your plot in 2 working days.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact", path: "/contact" }]} />
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
              <a href="tel:+917386858421" className={styles.contactCard}>
                <span className={styles.cardIconWrap}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                <div className={styles.cardContent}>
                  <h4>Phone</h4>
                  <p>+91 73868 58421</p>
                </div>
              </a>

              <a
                href="https://wa.me/917386858421?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20construction%20project."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactCard}
              >
                <span className={styles.cardIconWrap}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </span>
                <div className={styles.cardContent}>
                  <h4>WhatsApp</h4>
                  <p>Chat with us on WhatsApp</p>
                </div>
              </a>

              <a href="mailto:info@suciconstructions.com" className={styles.contactCard}>
                <span className={styles.cardIconWrap}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                <div className={styles.cardContent}>
                  <h4>Email</h4>
                  <p>info@suciconstructions.com</p>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/place/SUCI+CONSTRUCTIONS/@17.372132,78.556481,16z/data=!4m6!3m5!1s0x3bcb99004f2b868d:0xdc2fa57ca3f33c57!8m2!3d17.3721316!4d78.556481!16s%2Fg%2F11zh37b2m_?hl=en&entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactCard}
              >
                <span className={styles.cardIconWrap}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <div className={styles.cardContent}>
                  <h4>Office</h4>
                  <p>2-4-216, Road No. 9A, Snehapuri Colony,<br/>New Nagole, Hyderabad 500035</p>
                  <p className={styles.closedNote}>Monday – Saturday, 9:30 am – 6:30 pm</p>
                </div>
              </a>
              <a href="https://www.instagram.com/suci_constructions/" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                <span className={styles.cardIconWrap} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".5" /></svg>
                </span>
                <div className={styles.cardContent}><h4>Instagram</h4><p>@suci_constructions</p></div>
              </a>
              <a href="https://www.youtube.com/@SUCICONSTRUCTIONS" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                <span className={styles.cardIconWrap} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3z" /></svg>
                </span>
                <div className={styles.cardContent}><h4>YouTube</h4><p>@SUCICONSTRUCTIONS</p></div>
              </a>
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
                    <option value="peb">Industrial / Steel Building</option>
                    <option value="interior">Interior Design</option>
                    <option value="renovation">Renovation</option>
                    <option value="other">Other / Not sure yet</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="location">Plot location</label>
                  <input type="text" id="location" name="location" placeholder="Area or locality in Telangana or Andhra Pradesh" />
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

      <div className={`container ${styles.updates}`}>
        <section className={styles.mapSection} aria-labelledby="location-heading">
          <h2 id="location-heading">Visit our office</h2>
          <p>2-4-216, Road No. 9A, Snehapuri Colony, New Nagole, Hyderabad 500035.</p>
          <p>Just 5 minutes from Victoria / Nagole Metro. Monday – Saturday, 9:30 am – 6:30 pm.</p>
          <a className={styles.directionsLink} href="https://www.google.com/maps/place/SUCI+CONSTRUCTIONS/@17.372132,78.556481,16z/data=!4m6!3m5!1s0x3bcb99004f2b868d:0xdc2fa57ca3f33c57!8m2!3d17.3721316!4d78.556481!16s%2Fg%2F11zh37b2m_?hl=en&entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Get directions →</a>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.8254215836214!2d78.55648099999999!3d17.3721316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99004f2b868d%3A0xdc2fa57ca3f33c57!2sSUCI%20CONSTRUCTIONS!5e0!3m2!1sen!2sin!4v1791101238614!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="SUCI Constructions office on Google Maps"
          />
        </section>

        <div className={styles.socialGrid}>
          <section className={styles.socialCard} aria-labelledby="instagram-heading">
            <div className={styles.socialCardHeader}>
              <h2 id="instagram-heading">On Instagram</h2>
              <p>@suci_constructions</p>
            </div>
            <div className={styles.socialCardBody}>
              <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
              <div className="elfsight-app-6c28dbb7-713e-4717-8885-6ae83f2241b7" data-elfsight-app-lazy></div>
            </div>
            <a href="https://www.instagram.com/suci_constructions/" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>Follow us on Instagram</a>
          </section>

          <section className={styles.socialCard} aria-labelledby="youtube-heading">
            <div className={styles.socialCardHeader}>
              <h2 id="youtube-heading">Latest videos</h2>
              <p>SUCI Constructions</p>
            </div>
            <div className={styles.socialCardBody}>
              <div className={styles.videoFrame}>
                <iframe
                  src="https://www.youtube.com/embed/videoseries?list=UUTDH__6ooUe9e0Zjwav2dJg"
                  title="Latest videos from SUCI Constructions on YouTube"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
            <a href="https://www.youtube.com/@SUCICONSTRUCTIONS" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>Visit our YouTube channel</a>
          </section>
        </div>
      </div>
    </>
  );
}
