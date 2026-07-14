import Link from "next/link";
import Carousel from "@/components/Carousel";
import Counter from "@/components/Counter";

export const metadata = {
  title: "Udupi Sambrama | Pure Veg A/C Fine Dine Restaurant, Yelahanka",
  description:
    "Udupi Sambrama — a pure vegetarian A/C fine dine restaurant at Kogilu Cross, Yelahanka, Bengaluru. South Indian, North Indian, Chinese, Tandoori, Chats, Icecream & Juices. Dine-in, takeaway, home delivery & catering.",
};

const CUISINES = [
  { photo: "south_indian", icon: "i-dosa", hue: "hue-maroon", name: "South Indian", desc: "Dosa, Idly, Bath varieties & meals" },
  { photo: "north_indian", icon: "i-curry-pot", hue: "hue-red", name: "North Indian", desc: "Curries, biryani, roti & kulcha" },
  { photo: "chinese", icon: "i-noodles", hue: "hue-green", name: "Chinese", desc: "Fried rice, noodles & starters" },
  { photo: "tandoori", icon: "i-skewer", hue: "hue-gold", name: "Tandoori", desc: "Paneer & veg tandoori thadka's" },
  { photo: "chats", icon: "i-samosa", hue: "hue-saffron", name: "Chats", desc: "Pani puri, bhel puri, sev puri & more" },
  { photo: "icecream", icon: "i-icecream", hue: "hue-red", name: "Icecream", desc: "Shakes, sundaes & falooda" },
  { photo: "juice", icon: "i-juice", hue: "hue-green", name: "Juice", desc: "Fresh juices, lassi & milkshakes" },
  { photo: "sweets", icon: "i-sweet", hue: "hue-gold", name: "Sweets", desc: "Gulab jamun, carrot halwa, holige" },
];

const POPULAR_DISHES = [
  { photo: "south_indian", icon: "i-dosa", hue: "hue-maroon", tag: "Bestseller", name: "Mysore Masala Dosa", price: 135 },
  { photo: "north_indian", icon: "i-curry-pot", hue: "hue-red", tag: "Chef's Pick", name: "Paneer Butter Masala", price: 250 },
  { photo: "biryani", icon: "i-curry-pot", hue: "hue-saffron", tag: "Popular", name: "Veg. Biriyani", price: 190 },
  { photo: "sweets", icon: "i-sweet", hue: "hue-gold", tag: "Sweet Ending", name: "Gulab Jamun (1pc)", price: 40 },
  { photo: "tandoori", icon: "i-skewer", hue: "hue-red", tag: "Tandoori Special", name: "Paneer Tikka", price: 285 },
  { photo: "chats", icon: "i-samosa", hue: "hue-green", tag: "Chats Favourite", name: "Pani Puri", price: 65 },
  { photo: "south_indian", icon: "i-dosa", hue: "hue-saffron", tag: "Classic", name: "Masala Dosa", price: 85 },
  { photo: "cold_coffee", icon: "i-juice", hue: "hue-gold", tag: "Refresher", name: "Cold Coffee", price: 90 },
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container">
          <div className="hero-copy">
            <span className="hero-badge hero-anim d1"><svg className="icon"><use href="#i-leaf" /></svg> 100% Pure Vegetarian</span>
            <h1 className="hero-anim d2">Udupi Sambrama &mdash; <span>Sambrama</span> on Every Plate</h1>
            <p className="lead hero-anim d3">A quick-service A/C fine dine restaurant at Kogilu Cross, Yelahanka serving authentic South Indian, North Indian, Chinese, Tandoori, Chats, Icecream &amp; Juices &mdash; made fresh, served hot.</p>
            <div className="hero-cta hero-anim d4">
              <Link href="/menu/" className="btn btn-gold">View Full Menu <svg className="icon"><use href="#i-arrow" /></svg></Link>
              <a href="tel:+917676490777" className="btn btn-ghost-white"><svg className="icon"><use href="#i-phone" /></svg> Call Now</a>
              <a href="https://wa.me/917676490777" target="_blank" rel="noopener" className="btn btn-whatsapp"><svg className="icon"><use href="#i-whatsapp" /></svg> WhatsApp Us</a>
            </div>
            <div className="hero-tags hero-anim d5">
              <span><svg className="icon"><use href="#i-check" /></svg> Self Service</span>
              <span><svg className="icon"><use href="#i-check" /></svg> A/C Dine-In</span>
              <span><svg className="icon"><use href="#i-check" /></svg> Bulk &amp; Corporate Catering</span>
              <span><svg className="icon"><use href="#i-check" /></svg> Takeaway &amp; Home Delivery</span>
            </div>
          </div>
          <div className="hero-art hero-anim d3">
            <div className="glow" aria-hidden="true"></div>
            <div className="ring" aria-hidden="true"></div>
            <img src="/assets/img/logo-icon.png" alt="Udupi Sambrama emblem" />
          </div>
        </div>
      </section>

      <div className="strip" aria-hidden="true">
        <div className="strip-track">
          <span><svg className="icon"><use href="#i-plate" /></svg> Quick Service A/C Fine Dine</span>
          <span><svg className="icon"><use href="#i-users" /></svg> Bulk Bookings &amp; Corporate Catering</span>
          <span><svg className="icon"><use href="#i-calendar" /></svg> Outdoor Catering for All Events</span>
          <span><svg className="icon"><use href="#i-truck" /></svg> Take Away &amp; Home Delivery</span>
          <span><svg className="icon"><use href="#i-plate" /></svg> Quick Service A/C Fine Dine</span>
          <span><svg className="icon"><use href="#i-users" /></svg> Bulk Bookings &amp; Corporate Catering</span>
          <span><svg className="icon"><use href="#i-calendar" /></svg> Outdoor Catering for All Events</span>
          <span><svg className="icon"><use href="#i-truck" /></svg> Take Away &amp; Home Delivery</span>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head center" data-reveal>
            <span className="eyebrow">What We Serve</span>
            <h2>A Menu Built for Every Craving</h2>
            <p>From filter coffee to fried rice &mdash; one address for every cuisine your family loves.</p>
          </div>
          <div className="grid grid-4" data-reveal-group>
            {CUISINES.map((c) => (
              <div className="cuisine-card" key={c.name}>
                <div className="cuisine-photo">
                  <img src={`/assets/img/dishes/${c.photo}.jpg`} alt={c.name} loading="lazy" />
                  <div className={`cuisine-icon ${c.hue}`}><svg className="icon"><use href={`#${c.icon}`} /></svg></div>
                </div>
                <div className="cuisine-body">
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head center" data-reveal>
            <span className="eyebrow">Guest Favourites</span>
            <h2>Popular Picks From Our Menu</h2>
            <p>Swipe through a few of the dishes our guests keep coming back for.</p>
          </div>
          <Carousel>
            {POPULAR_DISHES.map((d, i) => (
              <div className="dish-card" key={`${d.name}-${i}`}>
                <div className="dish-top">
                  <img src={`/assets/img/dishes/${d.photo}.jpg`} alt={d.name} loading="lazy" />
                  <div className={`dish-icon ${d.hue}`}><svg className="icon"><use href={`#${d.icon}`} /></svg></div>
                </div>
                <div className="dish-body"><span className="tag">{d.tag}</span><h3>{d.name}</h3><span className="price">&#8377;{d.price}</span></div>
              </div>
            ))}
          </Carousel>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/menu/" className="btn btn-primary">Explore Full Menu <svg className="icon"><use href="#i-arrow" /></svg></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center" data-reveal>
            <span className="eyebrow">How We Serve You</span>
            <h2>Dine In, Take Away or Let Us Cater</h2>
          </div>
          <div className="grid grid-4" data-reveal-group>
            <div className="feature-card">
              <div className="icon-wrap"><svg className="icon"><use href="#i-bag" /></svg></div>
              <h3>Self Service</h3>
              <p>Quick, casual ordering for a fast and easy meal on the go.</p>
            </div>
            <div className="feature-card">
              <div className="icon-wrap"><svg className="icon"><use href="#i-plate" /></svg></div>
              <h3>A/C Dine-In</h3>
              <p>Relax in comfortable air-conditioned seating with full table service.</p>
            </div>
            <div className="feature-card">
              <div className="icon-wrap"><svg className="icon"><use href="#i-users" /></svg></div>
              <h3>Bulk &amp; Corporate Catering</h3>
              <p>Bulk bookings and corporate catering services for offices &amp; gatherings.</p>
            </div>
            <div className="feature-card">
              <div className="icon-wrap"><svg className="icon"><use href="#i-truck" /></svg></div>
              <h3>Takeaway &amp; Delivery</h3>
              <p>Outdoor catering for all events, plus takeaway &amp; home delivery.</p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/service/" className="btn btn-outline">More About Our Services</Link>
          </div>
        </div>
      </section>

      <section className="section section-feature">
        <div className="container about-split">
          <div className="about-photo" data-reveal>
            <img src="/assets/img/storefront.jpg" alt="Udupi Sambrama restaurant storefront at Kogilu Cross, Yelahanka" />
            <div className="caption">
              <span>Our Restaurant</span>
              <p>Kogilu Cross, Yelahanka</p>
            </div>
          </div>
          <div data-reveal>
            <span className="eyebrow">Who We Are</span>
            <h2>Serving Sambrama-Filled Meals at Kogilu Cross, Yelahanka</h2>
            <p style={{ color: "var(--ink-soft)", fontSize: 16 }}>Udupi Sambrama is a 100% vegetarian, A/C fine dine restaurant committed to fresh ingredients, hygienic preparation and authentic recipes &mdash; served with warmth and quick, attentive service.</p>
            <div className="stat-row">
              <div className="stat"><Counter value={100} suffix="%" /><span>Vegetarian Kitchen</span></div>
              <div className="stat"><Counter value={8} suffix="+" /><span>Cuisine Categories</span></div>
              <div className="stat"><Counter value={250} suffix="+" /><span>Dishes on the Menu</span></div>
            </div>
            <div className="hero-tags">
              <span><svg className="icon"><use href="#i-leaf" /></svg> Pure Vegetarian Kitchen</span>
              <span><svg className="icon"><use href="#i-award" /></svg> Fresh, Hygienic &amp; Authentic</span>
              <span><svg className="icon"><use href="#i-clock" /></svg> Quick Service</span>
            </div>
            <div style={{ marginTop: 28 }}>
              <Link href="/about/" className="btn btn-gold">Read Our Story <svg className="icon"><use href="#i-arrow" /></svg></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band" data-reveal>
            <div>
              <h2>Planning an Event or Office Party?</h2>
              <p>Ask us about bulk bookings, corporate catering &amp; outdoor catering for all occasions.</p>
            </div>
            <div className="cta-actions">
              <Link href="/contact/" className="btn btn-gold">Get in Touch</Link>
              <a href="https://wa.me/917676490777" target="_blank" rel="noopener" className="btn btn-ghost-white"><svg className="icon"><use href="#i-whatsapp" /></svg> WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
