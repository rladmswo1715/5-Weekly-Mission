import { ReactNode } from "react";
import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface AppProps {
  children: ReactNode;
}

const Layout: React.FC<AppProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
