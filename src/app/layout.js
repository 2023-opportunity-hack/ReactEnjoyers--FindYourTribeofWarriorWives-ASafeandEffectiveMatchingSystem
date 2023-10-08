import "./globals.css";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Warrior Wives",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ChakraProvider>
          <NavBar />
          <div className="bg-slate-100 pt-10 pb-10">{children}</div>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}