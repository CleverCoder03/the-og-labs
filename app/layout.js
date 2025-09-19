import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatePresenceWrapper from "./components/AnimatePresenceWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The OG Lab",
  description: "A marketing agency i the age of AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimatePresenceWrapper>
          {children}
        </AnimatePresenceWrapper>
      </body>
    </html>
  );
}
