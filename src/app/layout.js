import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { istokWeb } from "../../public/fonts";


export const metadata = {
  title: "talatech",
  description: "Ready to Elevate Your Business with expert Freelance Solutions?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={istokWeb.className}>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
