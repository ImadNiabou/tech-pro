import { MuseoModerno } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const museoModerno = MuseoModerno({ subsets: ["latin"] });

export const metadata = {
  title: "TechPro",
  description: "Tech shop ecommerce white Next Js 14.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={museoModerno.className}>
          <Header/>
          {children}
          <Footer/>
          </body>
      </html>
    </ClerkProvider>
  );
}
