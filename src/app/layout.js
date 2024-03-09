import Head from "next/head";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Google Clone",
  description:
    "An open source Google clone built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <body className="relative min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
