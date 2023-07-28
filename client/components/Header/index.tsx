"use client";
import styles from "./index.module.css";
import Image from "next/image";
import pepnops from "../../public/images/pheader.png";
import Link from "next/link";
import { CSSProperties, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Header = () => {
  const [sidebar, setSideBar] = useState<boolean>(false);
  const sideContent = useRef<HTMLDivElement | null>(null);
  const sideBar = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const showStyle = (): CSSProperties => {
    const talkStyle: CSSProperties = {
      position: "relative",
      backgroundColor: "black",
    };

    const normStyle: CSSProperties = {
      position: "absolute",
      backgroundColor: "rgba(0, 0, 0, 0.45)",
    };
    return pathname === "/contact" ? talkStyle : normStyle;
  };

  const show = () => {
    setSideBar(true);
    setTimeout(() => {
      if (sideContent.current && sideBar.current) {
        sideBar.current.style.display = "block";
        sideContent.current.style.width = "85%";
        sideContent.current.style.visibility = "visible";
      }
    }, 700);
  };

  const hide = () => {
    setSideBar(false);
    setTimeout(() => {
      if (sideContent.current) {
        sideContent.current.style.width = "0%";
        sideContent.current.style.visibility = "hidden";
      }
    }, 400);
  };

  const LinkAction = (where: string) => {
    hide();
    router.push(where);
  };

  const setLinks = (where: string) => {
    router.push("/" + where);
  };

  return (
    <div style={showStyle()} className={styles.header}>
      <div
        style={{
          right: sidebar ? "0%" : "-100%",
        }}
        className={styles.sidebar}
        ref={sideBar}
      >
        <div ref={sideContent} className={styles.sideContent}>
          <div onClick={hide} className={styles.close}>
            &times;
          </div>
          <ol>
            <li onClick={() => LinkAction("/")}>Home</li>
            <li onClick={() => LinkAction("/#solutions")}>Solutions</li>
            <li onClick={() => LinkAction("/about")}>Who we are</li>
            <li onClick={() => LinkAction("/careers")}>Careers</li>
            <li onClick={() => LinkAction("/contact")}>{`Let's Talk`}</li>
          </ol>
        </div>
      </div>
      <div onClick={show} className={styles.bars}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className={styles.logo}>
        <Link href={"/"}>
          <Image
            src={pepnops}
            alt="card-image"
            fill={true}
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </div>
      <div>
        <ul>
          <li onClick={() => router.push("/#solutions")}>Solutions</li>
          <li onClick={() => router.push("/about")}>Who we are</li>
          <li onClick={() => router.push("/careers")}>Careers</li>
          <li onClick={() => router.push("/contact")}>{`Let's Talk`}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
