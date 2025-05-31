import Footer from "@/components/Footer";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { unstable_ViewTransition as ViewTransition } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terrence J Chan",
  description:
    "Terrence's corner of the web. See his web design and development portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col justify-between overflow-x-clip scroll-smooth bg-gray-50 antialiased">
        <ViewTransition>
          <main>{children}</main>
        </ViewTransition>
        <ViewTransition name="footer">
          <Footer />
        </ViewTransition>
      </body>
    </html>
  );
}
