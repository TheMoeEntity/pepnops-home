"use client";
import styles from "./index.module.css";
import icon2 from "../../public/images/pep-girl2.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.hero}>
      {/* <Image
        src={icon2}
        alt="card-image"
        fill={true}
        quality={100}
        priority={true}
        sizes="(max-width: 3840px) 100vw, (max-width: 2880px) 50vw, 33vw"
      /> */}
      <div className={styles.captions}>
        <h1>
          Embrace the <br />
          <span className={styles.dot}>ease side of life</span>
        </h1>

        <p>
          Dive into the future where convenience is a given, and <br />{" "}
          simplicity is a standard. Our tailored products and services <br />{" "}
          help to streamline processes, eliminate obstacles, and <br />{" "}
          illuminate the pathway to success
        </p>
        <button>{`LET'S`} TALK</button>
      </div>
    </div>
  );
};

export default Hero;
