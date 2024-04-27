import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My resume App",
  description: "This small app is just to show on my resume",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
