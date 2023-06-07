import Header from "../components/Header";
import {
  Kanit,
  Nanum_Gothic,
  Dosis,
  // Barlow Condensed,
  Raleway,
  // PT Sans Narrow,
  // Quicksand,
  // Barlow Condensed,
  // Saira Condensed,

  Rajdhani,
} from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const kanit = Kanit({ subsets: ["latin"], fallback: ["Inter"], weight: "500" });
const raleway = Raleway({
  subsets: ["latin"],
  fallback: ["Inter"],
  weight: "500",
});

export const metadata = {
  title: "SuccessWeb - Twoj partner w sukcesie",
  description: "Interaktywna agecja reklamy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="box-border overflow-x-hidden">
      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
