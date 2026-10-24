import type { Metadata } from "next";
import { Questrial, Roboto } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "../styles/global.css";
import "../styles/inner.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"], variable: "--font-roboto", display: "swap" });
const questrial = Questrial({ subsets: ["latin"], weight: "400", variable: "--font-questrial", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drshwetawazir.com"),
  title: "Dr. Shweta Wazir - Best Gynecologist in Gurgaon",
  description: "Dr. Shweta Wazir - Best Gynecologist in Gurgaon with over 15+ years of experience and high class reputation in Gurgaon.",
  openGraph: {
    siteName: "Dr. Shweta Bansal Wazir",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${questrial.variable}`}>
      <body>
        <div className="page-wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
