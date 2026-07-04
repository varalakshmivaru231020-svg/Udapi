import Link from "next/link";

export const metadata = {
  title: "Menu",
  description:
    "Full menu of Udupi Sambrama, Yelahanka — Beverages, South Indian, Dosa, Meals, Soup, North Indian Rice, Starters, Chinese, Tandoori, Curry, Roti, Chats, Sandwiches, Icecream, Juice & Milkshake items with prices.",
};

const MENU_PAGES = [
  { file: "menu-02.jpg", alt: "Menu page 1: Beverages and South Indian Dishes" },
  { file: "menu-03.jpg", alt: "Menu page 2: Dosa and Special Items" },
  { file: "menu-04.jpg", alt: "Menu page 3: Meals, Soup and North Indian Rice" },
  { file: "menu-05.jpg", alt: "Menu page 4: Starters, Chinese Special Dry Items and Tandoori Thadka's" },
  { file: "menu-06.jpg", alt: "Menu page 5: Chinese Rice and Noodles, Curry Items" },
  { file: "menu-07.jpg", alt: "Menu page 6: Curry Items continued and Roti Items" },
  { file: "menu-09.jpg", alt: "Menu page 7: Chats Items, Tawa Ka Kamaal, Sandwich and Grills, Icecream Shake's and Sundae and Falooda" },
  { file: "menu-08.jpg", alt: "Menu page 8: Juice Choice and Milkshake" },
];

export default function MenuPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 36 }}>
        <div className="container">
          <span className="eyebrow">Our Menu</span>
          <h1>Everything We Serve</h1>
          <p className="lead">100% vegetarian &middot; freshly prepared &middot; all prices in &#8377;</p>
          <p className="breadcrumb"><Link href="/">Home</Link> / Menu</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container menu-page-stack">
          {MENU_PAGES.map((p, i) => (
            <div className="menu-page-card" data-reveal key={p.file}>
              <img src={`/assets/img/menu-pages/${p.file}`} alt={p.alt} loading={i < 2 ? "eager" : "lazy"} />
            </div>
          ))}
        </div>
      </section>

      <div className="menu-disclaimer">
        <div className="container">
          <h4>Please Note</h4>
          <ul>
            <li>Items mentioned in this menu are subject to availability</li>
            <li>Kindly bear with us for 20 minutes to serve you fresh &amp; hot</li>
            <li>Once placed, an order cannot be changed / cancelled</li>
            <li>Management is not responsible for your belongings</li>
            <li>Remaining items will not be packed</li>
            <li>Parcel charges applicable</li>
            <li>Rights of admission reserved</li>
            <li>Outside eatables are strictly not allowed</li>
          </ul>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="cta-band" data-reveal>
            <div>
              <h2>Craving Something From the Menu?</h2>
              <p>Call ahead, order via WhatsApp, or just walk in &mdash; we&apos;ll have it fresh &amp; hot for you.</p>
            </div>
            <div className="cta-actions">
              <a href="tel:+917676490777" className="btn btn-gold"><svg className="icon"><use href="#i-phone" /></svg> Call Now</a>
              <a href="https://wa.me/917676490777" target="_blank" rel="noopener" className="btn btn-ghost-white"><svg className="icon"><use href="#i-whatsapp" /></svg> WhatsApp Order</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
