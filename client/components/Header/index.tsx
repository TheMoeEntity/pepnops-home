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
  const sideBar = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

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

  return (
    <div className={styles.header}>
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
            <li onClick={() => LinkAction("#solutions")}>Solutions</li>
            <li>Who we are</li>
            <li>{`Let's Talk`}</li>
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
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
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
