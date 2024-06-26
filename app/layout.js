import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gadget store bd",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  largeScreenContainer main`}>
        <div className="text-white bg-slate-800">
        <Header/>
        <ToastContainer />
        {children}
        <Footer/>
        </div>
        </body>

    </html>
  );
}
