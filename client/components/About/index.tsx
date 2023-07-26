"use client";
import styles from "../index.module.css";
import third from "../../public/images/third.jpg";
import laptop from "../../public/images/laptop.jpg";
import shake from "../../public/images/shake.jpg";
import Image from "next/image";
import { useRef } from "react";
import { useAnimation } from "@/helpers/useAnimation";
const About = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const grid = useRef<HTMLDivElement | null>(null);
  useAnimation(grid, styles.addWidth, true, container);

  return (
    <div className={styles.about}>
      <div ref={container} className={styles.title}>
        <h2>
          We have all the technology <br />
          solution you need.
        </h2>
        <p>Pepnops Inc. provides and customized software solutions</p>
      </div>
      <div ref={grid} className={styles.grid}>
        <div>
          <div className={styles.capt}>
            Why <br />
            Choose <br />
            US
          </div>
          <div className={styles.capt2}>
            Our solutions are tailored to suit your specific needs
          </div>
          <Image
            src={shake}
            alt="card-image"
            fill={true}
            quality={100}
            priority={true}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <div className={styles.capt}>
            We have <br />
            over a decade of collective experience
          </div>
          <Image
            src={laptop}
            alt="card-image"
            fill={true}
            quality={100}
            priority={true}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <div className={styles.capt}>
            Our solutions are Reliable, and tailored to consistently exceed{" "}
            {`client's`} expectations
          </div>
          <Image
            src={third}
            alt="card-image"
            fill={true}
            quality={100}
            priority={true}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* <i className={styles.aria} aria-hidden="true"></i> */}
        {/* <i className={styles.aria} aria-hidden="true"></i> */}
      </div>
    </div>
  );
};

export default About;
