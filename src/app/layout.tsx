import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Topbar from "./components/nav";
import Footer from "./components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vesta Systems",
  description: "Crafting Tomorrow's Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
