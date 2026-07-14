import Link from "next/link";
import Counter from "@/components/Counter";

export const metadata = {
  title: "About Us",
  description:
    "Udupi Sambrama is a pure vegetarian A/C fine dine restaurant at Kogilu Cross, Yelahanka — a unit of Siddhi Vinayaka Enterprises, serving fresh, hygienic and authentic food.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1>The Story Behind Udupi Sambrama</h1>
          <p className="lead">Pure vegetarian. Freshly made. Served with sambrama (celebration) in every meal.</p>
          <p className="breadcrumb"><Link href="/">Home</Link> / About</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-split">
          <div className="about-media" data-reveal>
            <img src="/assets/img/logo-icon.png" alt="Udupi Sambrama emblem" />
            <span>A Unit of</span>
            <p>Siddhi Vinayaka Enterprises</p>
          </div>
          <div data-reveal>
            <span className="eyebrow">Who We Are</span>
            <h2>A Pure-Veg A/C Fine Dine Restaurant at Kogilu Cross, Yelahanka</h2>
            <p>Udupi Sambrama is a quick-service, air-conditioned fine dine restaurant located at Kogilu Cross Circle on International Airport Road, Yelahanka, Bengaluru. As a unit of Siddhi Vinayaka Enterprises, we bring together the comfort of a neighbourhood favourite with the consistency and hygiene of a professionally run kitchen.</p>
            <p>Our menu spans South Indian tiffins, North Indian curries &amp; biryani, Chinese rice &amp; noodles, Tandoori thadka&apos;s, chats, icecreams and juices &mdash; all prepared fresh, 100% vegetarian, and served hot in a clean, comfortable dining space.</p>
            <div className="stat-row">
              <div className="stat"><Counter value={100} suffix="%" /><span>Vegetarian Kitchen</span></div>
              <div className="stat"><Counter value={8} suffix="+" /><span>Cuisine Categories</span></div>
              <div className="stat"><Counter value={250} suffix="+" /><span>Dishes on the Menu</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head center" data-reveal>
            <span className="eyebrow">Our Promise</span>
            <h2>Why Guests Choose Udupi Sambrama</h2>
            <p>Every plate that leaves our kitchen carries the same promise &mdash; freshness, hygiene and honest, home-style flavour.</p>
          </div>
          <div className="grid grid-4" data-reveal-group>
            <div className="feature-card">
              <div className="icon-wrap"><svg className="icon"><use href="#i-leaf" /></svg></div>
              <h3>Pure Vegetarian</h3>
              <p>A 100% vegetarian kitchen, prepared with care for every diet and occasion.</p>
            </div>
            <div className="feature-card">
              <div className="icon-wrap"><svg className="icon"><use href="#i-award" /></svg></div>
              <h3>Fresh &amp; Hygienic</h3>
              <p>Ingredients sourced fresh daily and prepared in a clean, well-managed kitchen.</p>
            </div>
            <div className="feature-card">
              <div className="icon-wrap"><svg className="icon"><use href="#i-clock" /></svg></div>
              <h3>Quick Service</h3>
              <p>Efficient service without compromising on taste &mdash; because your time matters.</p>
            </div>
            <div className="feature-card">
              <div className="icon-wrap"><svg className="icon"><use href="#i-plate" /></svg></div>
              <h3>Comfortable A/C Dining</h3>
              <p>A relaxed, air-conditioned space perfect for family meals and quick bites alike.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-split">
          <div data-reveal>
            <span className="eyebrow">What We Offer</span>
            <h2>One Address, Every Craving</h2>
            <p>Whether it&apos;s a quick breakfast, a family dinner or a full-blown catering order for your event, our kitchen is built to deliver consistently good food across cuisines.</p>
            <ul className="value-list">
              <li>
                <span className="icon-wrap"><svg className="icon"><use href="#i-plate" /></svg></span>
                <div><h4>South &amp; North Indian</h4><p>Dosa, idly, bath varieties, meals, curries, biryani &amp; roti.</p></div>
              </li>
              <li>
                <span className="icon-wrap"><svg className="icon"><use href="#i-bag" /></svg></span>
                <div><h4>Chinese &amp; Tandoori</h4><p>Fried rice, noodles, starters and paneer/veg tandoori thadka&apos;s.</p></div>
              </li>
              <li>
                <span className="icon-wrap"><svg className="icon"><use href="#i-star" /></svg></span>
                <div><h4>Chats, Icecream &amp; Juice</h4><p>Pani puri, sandwiches, sundaes, faloodas and fresh juices to round off your meal.</p></div>
              </li>
              <li>
                <span className="icon-wrap"><svg className="icon"><use href="#i-users" /></svg></span>
                <div><h4>Catering for Every Occasion</h4><p>Bulk bookings, corporate catering &amp; outdoor catering for all events.</p></div>
              </li>
            </ul>
          </div>
          <div className="about-media" data-reveal style={{ background: "linear-gradient(160deg, var(--deep), #2e0c06)" }}>
            <img src="/assets/img/logo-icon.png" alt="Udupi Sambrama emblem" />
            <span>Since Our Re-Launch</span>
            <p>Fresh Energy, Same Warmth</p>
          </div>
        </div>
      </section>

      <section className="section section-feature">
        <div className="container">
          <div className="cta-band" data-reveal style={{ background: "linear-gradient(120deg, var(--gold) 0%, var(--saffron) 100%)", color: "var(--deep)" }}>
            <div>
              <h2 style={{ color: "var(--deep)" }}>Come Experience Udupi Sambrama</h2>
              <p style={{ color: "rgba(74,18,10,0.8)" }}>Visit us at Kogilu Cross, Yelahanka, or reach out for takeaway, delivery &amp; catering.</p>
            </div>
            <div className="cta-actions">
              <Link href="/contact/" className="btn btn-primary">Visit / Contact Us</Link>
              <Link href="/menu/" className="btn" style={{ background: "var(--deep)", color: "var(--white)" }}>View Menu</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
