import "./globals.css";
import AnimatePresenceWrapper from "./components/AnimatePresenceWrapper";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "The OG Lab",
  description: "A marketing agency in the age of AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`antialiased`}
      >
        <AnimatePresenceWrapper>
          <Toaster position="bottom-right" reverseOrder={false} />
          {children}
        </AnimatePresenceWrapper>
      </body>
    </html>
  );
}
