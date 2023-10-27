"use client";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";

const Hero = () => {
  const router = useRouter();
  return (
    <div className={styles.hero}>
      <div className={styles.captions}>
        <h1>
          Embrace the <br />
          <span className={styles.dot}>ease side of life</span>
        </h1>

        <p>
          Our tailored products and services help to streamline processes,
          remove barriers, and pave your pathway to success.
        </p>
        <button onClick={() => router.push("/contact")}>{`LET'S`} TALK</button>
      </div>
    </div>
  );
};

export default Hero;
