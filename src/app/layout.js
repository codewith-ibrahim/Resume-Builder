import "../styles/globals.css";
import { Inter } from "next/font/google";
import Provider from "./Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // CSS variable
});

export const metadata = {
  title: "Resume Builder",
  description: "Interactive Resume & Portfolio Builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
      <Provider>{children}</Provider>
      </body>
    </html>
  );
}
