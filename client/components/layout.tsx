import Header from "./Header/";
import Script from "next/script";
import Footer from "./Footer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Script
        src="https://kit.fontawesome.com/4ef8c63dd7.js"
        crossOrigin="anonymous"
      ></Script>
      <Footer />
    </div>
  );
};

export default Layout;
