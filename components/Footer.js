import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/assets/img/logo.png" alt="Udupi Sambrama" className="footer-logo" />
          <p>A pure-veg A/C fine dine restaurant serving South Indian, North Indian, Chinese, Tandoori, Chats, Icecream &amp; Juices. A unit of Siddhi Vinayaka Enterprises.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><svg className="icon"><use href="#i-facebook" /></svg></a>
            <a href="#" aria-label="Instagram"><svg className="icon"><use href="#i-instagram" /></svg></a>
            <a href="https://wa.me/917676490777" target="_blank" rel="noopener" aria-label="WhatsApp"><svg className="icon"><use href="#i-whatsapp" /></svg></a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link href="/">Home</Link>
          <Link href="/about/">About Us</Link>
          <Link href="/service/">Our Services</Link>
          <Link href="/menu/">Menu</Link>
          <Link href="/contact/">Contact Us</Link>
        </div>
        <div className="footer-col">
          <h4>Our Services</h4>
          <span>Self Service</span>
          <span>A/C Dine-In</span>
          <span>Bulk &amp; Corporate Catering</span>
          <span>Outdoor Event Catering</span>
          <span>Takeaway &amp; Home Delivery</span>
        </div>
        <div className="footer-col">
          <h4>Get in Touch</h4>
          <a className="addr" href="https://www.google.com/maps?q=Udupi+Sambrama+Kogilu+Cross+Yelahanka+Bengaluru" target="_blank" rel="noopener">No. 64/153, Kogilu Cross Circle, International Airport Road, Yelahanka, Bengaluru &ndash; 560064</a>
          <a href="tel:+917676490777">+91 76764 90777</a>
          <a href="mailto:udupigrand14@gmail.com">udupigrand14@gmail.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {year} Udupi Sambrama &middot; A Unit of Siddhi Vinayaka Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
