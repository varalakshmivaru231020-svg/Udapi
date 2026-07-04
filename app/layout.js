import IconSprite from "@/components/IconSprite";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://udupisambrama.example.com"),
  title: {
    default: "Udupi Sambrama | Pure Veg A/C Fine Dine Restaurant, Yelahanka",
    template: "%s | Udupi Sambrama",
  },
  description:
    "Udupi Sambrama — a pure vegetarian A/C fine dine restaurant at Kogilu Cross, Yelahanka, Bengaluru. South Indian, North Indian, Chinese, Tandoori, Chats, Icecream & Juices. Dine-in, takeaway, home delivery & catering.",
  icons: {
    icon: "/assets/img/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Yeseva+One&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <IconSprite />
        <ScrollReveal />
        <Header />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
