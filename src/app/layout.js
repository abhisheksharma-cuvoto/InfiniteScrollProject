import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const montserrat = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cat Images - Infinite Scroll",
  description: "Explore endless cat images with smooth infinite scrolling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
