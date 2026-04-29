import type { Metadata } from "next";
import "../styles/globals.css";
import { CartProvider } from "@/lib/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: {
    default: "Innessa International | Premium Hair Care",
    template: "%s | Innessa International",
  },
  description:
    "Discover Innessa International — a luxury hair care brand rooted in Ayurvedic wisdom and modern science. Shop premium shampoos, serums, oils, and treatments.",
  keywords: [
    "hair care",
    "luxury shampoo",
    "hair serum",
    "ayurvedic hair oil",
    "keratin treatment",
    "Innessa International",
  ],
  openGraph: {
    title: "Innessa International | Premium Hair Care",
    description:
      "Luxury hair care essentials crafted with rare botanicals and Ayurvedic wisdom.",
    siteName: "Innessa International",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream text-espresso">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <CartDrawer />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
