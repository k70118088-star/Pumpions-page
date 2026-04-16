import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

// const press = Press_Start_2P({
//   weight: ["400","500","600","700","800"],
//   subsets: ["latin"],
// });



export const metadata = {
  title: "Pumpions",
  description:
    "Own, support & celebrate art.",
  openGraph: {
    title: "Pumpions",
    description:
      "Own, support & celebrate art.",
    images: ["/assets/webp/meta.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full bg-[#203948] flex flex-col">
          <Navbar />
        {children}
           <Footer />
        </body>
    </html>
  );
}
