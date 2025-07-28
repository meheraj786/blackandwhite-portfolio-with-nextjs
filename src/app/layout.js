import { Sora,  } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], 
  display: 'swap',
})

export const metadata = {
  title: "Meheraj H.",
  description: "A simple portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} antialiased overflow-x-hidden`}
        style={{ scrollBehavior: "smooth" }}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
