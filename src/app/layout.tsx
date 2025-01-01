import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Topbar from "./components/nav";
import Footer from "./components/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
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
      <body className={roboto.className}>
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
