import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import FloatingWhatsApp from "@/components/ui/floatingWhatsApp";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "TESLA Car Accessories",
  description:
    "Premium car accessories and professional installation services.",
    icons: {
    icon: "/icon5.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}    >
      <body className="min-h-full flex flex-col min-h-screen overflow-x-hidden">{children}
          <FloatingWhatsApp />

      </body>
    </html>
  );
}
