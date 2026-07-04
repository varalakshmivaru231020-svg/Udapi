import Link from "next/link";

export const metadata = {
  title: "Our Services",
  description:
    "Self Service, A/C Dine-In, Bulk & Corporate Catering, Outdoor Event Catering and Takeaway/Home Delivery at Udupi Sambrama, Yelahanka.",
};

export default function ServicePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our Services</span>
          <h1>Self Service, A/C Dine-In &amp; Catering</h1>
          <p className="lead">However you&apos;d like to enjoy Udupi Sambrama &mdash; quick, relaxed or for a whole event &mdash; we&apos;ve got it covered.</p>
          <p className="breadcrumb"><Link href="/">Home</Link> / Service</p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="service-block" data-reveal>
            <div className="num"><svg className="icon" style={{ width: 26, height: 26 }}><use href="#i-bag" /></svg></div>
            <div>
              <h3>Self Service</h3>
              <p>Walk in, order at the counter and enjoy a quick, no-fuss meal &mdash; perfect for a fast breakfast, lunch break or a quick bite between errands.</p>
              <ul>
                <li><svg className="icon"><use href="#i-check" /></svg> Fast counter ordering</li>
                <li><svg className="icon"><use href="#i-check" /></svg> Ideal for solo &amp; quick meals</li>
                <li><svg className="icon"><use href="#i-check" /></svg> Fresh, hot &amp; ready quickly</li>
              </ul>
            </div>
          </div>

          <div className="service-block" data-reveal>
            <div className="num"><svg className="icon" style={{ width: 26, height: 26 }}><use href="#i-plate" /></svg></div>
            <div>
              <h3>A/C Dine-In</h3>
              <p>Settle into our comfortable, air-conditioned dining space with full table service &mdash; the ideal spot for family meals, catch-ups and celebrations.</p>
              <ul>
                <li><svg className="icon"><use href="#i-check" /></svg> Comfortable A/C seating</li>
                <li><svg className="icon"><use href="#i-check" /></svg> Full table service</li>
                <li><svg className="icon"><use href="#i-check" /></svg> Great for families &amp; groups</li>
              </ul>
            </div>
          </div>

          <div className="service-block" data-reveal>
            <div className="num"><svg className="icon" style={{ width: 26, height: 26 }}><use href="#i-users" /></svg></div>
            <div>
              <h3>Bulk Bookings &amp; Corporate Catering</h3>
              <p>From office lunches to large gatherings, we handle bulk bookings and corporate catering with the same freshness and quality as our dine-in menu.</p>
              <ul>
                <li><svg className="icon"><use href="#i-check" /></svg> Corporate &amp; office catering</li>
                <li><svg className="icon"><use href="#i-check" /></svg> Bulk order bookings</li>
                <li><svg className="icon"><use href="#i-check" /></svg> Customisable menus on request</li>
              </ul>
            </div>
          </div>

          <div className="service-block" data-reveal>
            <div className="num"><svg className="icon" style={{ width: 26, height: 26 }}><use href="#i-calendar" /></svg></div>
            <div>
              <h3>Outdoor Catering for All Events</h3>
              <p>Weddings, birthdays, pujas or corporate events &mdash; our outdoor catering service brings the Udupi Sambrama menu to your venue.</p>
              <ul>
                <li><svg className="icon"><use href="#i-check" /></svg> Weddings &amp; family functions</li>
                <li><svg className="icon"><use href="#i-check" /></svg> Corporate &amp; social events</li>
                <li><svg className="icon"><use href="#i-check" /></svg> Full-service outdoor setup</li>
              </ul>
            </div>
          </div>

          <div className="service-block" data-reveal>
            <div className="num"><svg className="icon" style={{ width: 26, height: 26 }}><use href="#i-truck" /></svg></div>
            <div>
              <h3>Takeaway &amp; Home Delivery</h3>
              <p>Craving Udupi Sambrama at home or the office? Order for takeaway or get it delivered, quick and hot.</p>
              <ul>
                <li><svg className="icon"><use href="#i-check" /></svg> Quick takeaway counter</li>
                <li><svg className="icon"><use href="#i-check" /></svg> Home delivery service</li>
                <li><svg className="icon"><use href="#i-check" /></svg> Parcel charges applicable</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head center" data-reveal>
            <span className="eyebrow">Good to Know</span>
            <h2>Dine-In &amp; Ordering Guidelines</h2>
            <p>A few quick notes to help us serve you better.</p>
          </div>
          <div className="note-box" data-reveal>
            <h4>Please Note</h4>
            <ul>
              <li>Items mentioned in our menu are subject to availability.</li>
              <li>Kindly bear with us for about 20 minutes to serve you fresh &amp; hot food.</li>
              <li>Once placed, an order cannot be changed or cancelled.</li>
              <li>Management is not responsible for your personal belongings.</li>
              <li>Remaining/leftover items will not be packed.</li>
              <li>Parcel charges are applicable on takeaway orders.</li>
              <li>Rights of admission are reserved.</li>
              <li>Outside eatables are strictly not allowed on the premises.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band" data-reveal>
            <div>
              <h2>Ready to Book Catering for Your Event?</h2>
              <p>Tell us your headcount, date &amp; occasion &mdash; we&apos;ll take care of the rest.</p>
            </div>
            <div className="cta-actions">
              <a href="tel:+917676490777" className="btn btn-gold"><svg className="icon"><use href="#i-phone" /></svg> Call to Book</a>
              <a href="https://wa.me/917676490777" target="_blank" rel="noopener" className="btn btn-ghost-white"><svg className="icon"><use href="#i-whatsapp" /></svg> WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
