"use client";
import styles from "./index.module.css";
import icon2 from "../../public/images/landing.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {

  return (
    <div className={styles.hero}>
      <Image
        src={icon2}
        objectFit="cover"
        alt="card-image"
        layout="fill"
        quality={100}
        priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default Hero;
