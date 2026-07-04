import Link from "next/link";

export const metadata = {
  title: "Contact Us",
  description:
    "Visit or contact Udupi Sambrama at No. 64/153, Kogilu Cross Circle, International Airport Road, Yelahanka, Bengaluru. Call, WhatsApp or email us for dine-in, takeaway & catering.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact Us</span>
          <h1>We&apos;d Love to Serve You</h1>
          <p className="lead">Visit us, call ahead, or reach out for takeaway, delivery &amp; catering enquiries.</p>
          <p className="breadcrumb"><Link href="/">Home</Link> / Contact Us</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div data-reveal>
            <div className="contact-card">
              <div className="contact-row">
                <span className="icon-wrap"><svg className="icon"><use href="#i-pin" /></svg></span>
                <div>
                  <h4>Address</h4>
                  <a href="https://www.google.com/maps?q=Udupi+Sambrama+Kogilu+Cross+Yelahanka+Bengaluru" target="_blank" rel="noopener">No. 64/153, Kogilu Cross Circle, International Airport Road, Yelahanka, Bengaluru &ndash; 560064, Karnataka, India</a>
                </div>
              </div>
              <div className="contact-row">
                <span className="icon-wrap"><svg className="icon"><use href="#i-phone" /></svg></span>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+917676490777">+91 76764 90777</a>
                </div>
              </div>
              <div className="contact-row">
                <span className="icon-wrap"><svg className="icon"><use href="#i-whatsapp" /></svg></span>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/917676490777" target="_blank" rel="noopener">Chat with us on WhatsApp</a>
                </div>
              </div>
              <div className="contact-row">
                <span className="icon-wrap"><svg className="icon"><use href="#i-mail" /></svg></span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:udupigrand14@gmail.com">udupigrand14@gmail.com</a>
                </div>
              </div>
              <div className="contact-row">
                <span className="icon-wrap"><svg className="icon"><use href="#i-clock" /></svg></span>
                <div>
                  <h4>Open Days</h4>
                  <p>Open all days &middot; please call ahead to confirm timings</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <a href="tel:+917676490777" className="btn btn-primary btn-block" style={{ marginBottom: 12 }}><svg className="icon"><use href="#i-phone" /></svg> Call Now</a>
              <a href="https://wa.me/917676490777" target="_blank" rel="noopener" className="btn btn-whatsapp btn-block"><svg className="icon"><use href="#i-whatsapp" /></svg> Message on WhatsApp</a>
            </div>

            <div className="social-row">
              <a href="#" className="social-circle" aria-label="Facebook"><svg className="icon"><use href="#i-facebook" /></svg></a>
              <a href="#" className="social-circle" aria-label="Instagram"><svg className="icon"><use href="#i-instagram" /></svg></a>
            </div>
          </div>

          <div className="map-frame" data-reveal>
            <iframe src="https://www.google.com/maps?q=Udupi+Sambrama+Kogilu+Cross+Yelahanka+Bengaluru&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Udupi Sambrama location map"></iframe>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head center" data-reveal>
            <span className="eyebrow">Enquiries</span>
            <h2>Bulk Orders, Corporate &amp; Event Catering</h2>
            <p>Call or WhatsApp us with your event date, headcount and occasion &mdash; our team will get back to you with a menu &amp; quote.</p>
          </div>
          <div className="grid grid-3" data-reveal-group>
            <div className="feature-card">
              <div className="icon-wrap"><svg className="icon"><use href="#i-users" /></svg></div>
              <h3>Corporate Catering</h3>
              <p>Office lunches, meetings &amp; corporate events catered fresh.</p>
            </div>
            <div className="feature-card">
              <div className="icon-wrap"><svg className="icon"><use href="#i-calendar" /></svg></div>
              <h3>Outdoor Events</h3>
              <p>Weddings, functions &amp; celebrations &mdash; catering wherever you need it.</p>
            </div>
            <div className="feature-card">
              <div className="icon-wrap"><svg className="icon"><use href="#i-truck" /></svg></div>
              <h3>Takeaway &amp; Delivery</h3>
              <p>Order ahead for pickup, or get it delivered to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
