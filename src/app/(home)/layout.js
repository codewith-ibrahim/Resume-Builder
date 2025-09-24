import "../../styles/globals.css";
import { Inter } from "next/font/google";
import Provider from "../Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Resume Builder",
  description: "Interactive Resume & Portfolio Builder",
};

export default function HomeLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
