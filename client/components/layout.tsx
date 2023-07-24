"use client";
import Header from "./Header/";
import Script from "next/script";
import Footer from "./Footer";
import { ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { SnackbarProvider } from "notistack";

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const scrollBtn = useRef<HTMLDivElement | null>(null);
  const isBrowser = () => typeof window !== "undefined";
  useEffect(() => {
    window.addEventListener("scroll", animateIn);
    return () => {
      window.removeEventListener("scroll", animateIn);
    };
  }, []);
  const animateIn = () => {
    if (!isBrowser()) return;
    if (scrollBtn.current) {
      if (
        document.body.scrollTop > 120 ||
        document.documentElement.scrollTop > 120
      ) {
        scrollBtn.current.style.bottom = "30px";
        scrollBtn.current.style.opacity = "1";
      } else {
        scrollBtn.current.style.bottom = "-20px";
        scrollBtn.current.style.opacity = "0";
      }
    }
  };
  const scrollTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const validRoutes: string[] = [
    "/localhost:3000",
    "/localhost:3000/solutions/smartx",
    "/",
    "/about",
    "/IT_consulting",
    "/solutions/smartx",
    "/solutions/tracker_360",
    "/contact",
    "https://pepnops.vercel.app",
    "/solutions" + pathname.slice(8, pathname.length),
  ];
  const checkValid = (pathname: string): boolean => {
    return validRoutes.includes(pathname);
  };
  return (
    <SnackbarProvider
      classes={{ containerRoot: "z-alert" }}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
    >
      {!checkValid(pathname) ? <></> : <Header />}
      {children}
      <Script
        src="https://kit.fontawesome.com/4ef8c63dd7.js"
        crossOrigin="anonymous"
      ></Script>
      <div ref={scrollBtn} onClick={scrollTop} className="scrollTop">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      {!checkValid(pathname) ? <></> : <Footer />}
    </SnackbarProvider>
  );
};

export default Layout;
