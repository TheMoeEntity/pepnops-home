"use client";
import Header from "./Header/";
import Script from "next/script";
import Footer from "./Footer";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  console.log(pathname);
  const validRoutes: string[] = [
    "/localhost:3000",
    "/localhost:3000/solutions/smartx",
    "/",
    "/solutions/smartx",
    "/solutions/tracker_360",
    "https://pepnops.vercel.app",
    "/solutions" + pathname.slice(8, pathname.length),
  ];
  const checkValid = (pathname: string): boolean => {
    return validRoutes.includes(pathname);
  };
  return (
    <div>
      {!checkValid(pathname) ? <></> : <Header />}
      {children}
      <Script
        src="https://kit.fontawesome.com/4ef8c63dd7.js"
        crossOrigin="anonymous"
      ></Script>
      {!checkValid(pathname) ? <></> : <Footer />}
    </div>
  );
};

export default Layout;
