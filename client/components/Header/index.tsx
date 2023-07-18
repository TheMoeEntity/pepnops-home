"use client";
import styles from "./index.module.css";
import Image from "next/image";
import pepnops from "../../public/images/pheader.png";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [sidebar, setSideBar] = useState<boolean>(false);
  const sideContent = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const show = () => {
    setSideBar(true);
    setTimeout(() => {
      if (sideContent.current) {
        sideContent.current.style.width = "70%";
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
  return (
    <div className={styles.header}>
      <div
        style={{ right: sidebar ? "0%" : "-100%" }}
        className={styles.sidebar}
      >
        <div ref={sideContent} className={styles.sidecontent}>
          <div onClick={() => hide()} className={styles.close}>
            &times;
          </div>
          <ul>
            <li>
              <span>Home</span>
              <span>
                <i className="fa fa-plus"></i>
              </span>
            </li>
            <li>About</li>

            <li>
              <span>Pages</span>
              <span>
                <i className="fa fa-plus"></i>
              </span>
            </li>
            <li>Blog</li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bars}>
        <i onClick={show} className="fa-solid fa-bars"></i>
      </div>
      <div className={styles.logo}>
        <Image
          src={pepnops}
          objectFit="cover"
          alt="card-image"
          layout="fill"
          quality={100}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div>
        <ul>
          <li onClick={() => router.push("#solutions")}>Solutions</li>
          <li>Who we are</li>
          <li>{`Let's Talk`}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
