import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce Admin"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <div className="bg-blue-900 min-h-screen flex">
        <Nav/>
        <div className="bg-white flex-grow mt-2 mr-2 rounded-lg p-4 mb-2">
          <div className="text-black">
            {children}
          </div>
        </div>
      </div>
    </body>
    </html>
  );
}
