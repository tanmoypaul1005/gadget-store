
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DrawerDefault } from "./components/header/DrawerDefault";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gadget store bd",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${inter.className} largeScreenContainer main`}>
      <div className="relative text-white bg-slate-800">
        <div className="absolute top-0 left-0">
          <DrawerDefault />
        </div>
        <Header className="fixed top-0 left-0 z-10 w-full bg-slate-800" />
        <ToastContainer />
        <div className="mt-[64px] bg-slate-800 overflow-y-auto h-[calc(100vh-64px)]">
          {children}
          <Footer />
        </div>
      </div>
    </body>
  </html>
  );
}
