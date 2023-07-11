import "./globals.css";
import { Inter, Sriracha } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const sriracha = Sriracha({ subsets: ["thai", "latin"], weight: "400" });

export const metadata = {
  title: "Mutaru tarot",
  description:
    "เว็บไซต์ดูดวง Mutaru tarot โดยพี่หมอบอม ดูไพ่ยิปซี โหราศาสตร์ตะวันตก ทริคมู รวมแพ็คดูดวง",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sriracha.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
