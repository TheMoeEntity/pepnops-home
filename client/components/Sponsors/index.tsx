"use client";
import styles from "../index.module.css";
import sponsor1 from "../../public/images/sp1.png";
import sponsor2 from "../../public/images/sp2.png";
import sponsor3 from "../../public/images/sp3.png";
import sponsor4 from "../../public/images/sp4.png";
import Image from "next/image";
import { useRef, useState } from "react";

const Sponsors = () => {
  const grid = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState<number>(0);
  const interval = useRef(null);
  const move = () => {};
  return (
    <div className={styles.sponsors}>
      <div className={styles.title}>
        <h2>Our Trusted Clients</h2>
        <p>
          Pepnops Inc. has provided top-notch software solutions to <br /> happy
          clients across various industries.
        </p>
      </div>
      <div className={styles.container}>
        <div ref={grid} className={styles.sponsorsGrid}>
          <div>
            <Image
              src={sponsor1}
              alt="sponsors"
              fill={true}
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <Image
              src={sponsor2}
              alt="sponsors"
              fill={true}
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <Image
              src={sponsor3}
              alt="sponsors"
              fill={true}
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <Image
              src={sponsor4}
              alt="sponsors"
              fill={true}
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
