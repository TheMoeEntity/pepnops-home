"use client";
import styles from "../index.module.css";
import shake from "../../public/images/shake.jpg";
import laptop from "../../public/images/laptop.jpg";
import third from "../../public/images/third.jpg";
import Image from "next/image";
import { useEffect, useRef } from "react";
const About = () => {
  useEffect(() => {
    window.addEventListener("scroll", animateIn);
    return () => {
      window.removeEventListener("scroll", animateIn);
    };
  }, []);

  const container = useRef<HTMLDivElement | null>(null);
  const grid = useRef<HTMLDivElement | null>(null);

  const animateIn = () => {
    let height = window.innerHeight;
    if (container.current) {
      let width = container.current;
      let revealpoint = 120;
      let revealTop = width.getBoundingClientRect().top;
      if (revealTop < height - revealpoint) {
        width.classList.add(styles.addWidth);
      }
    }

    if (grid.current) {
      let widths = grid.current.children;

      for (let index = 0; index < widths.length; index++) {
        const element = widths[index];
        let revealTop = element.getBoundingClientRect().top;
        let revealpoint = 120;
        if (revealTop < height - revealpoint) {
          element.classList.add(styles.addWidth);
        } else {
          element.classList.remove(styles.addWidth);
        }
      }
      // for (const child of widths) {
      //   let revealTop = child.getBoundingClientRect().top;
      //   let revealpoint = 120;

      //   if (revealTop < height - revealpoint) {
      //     child.classList.add(styles.addWidth);
      //   } else {
      //     child.classList.remove(styles.addWidth);
      //   }
      // }
    }
  };
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
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <div className={styles.capt}>
            We have <br />
            over a decade of collective experience
          </div>
          <Image
            src={laptop}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <div className={styles.capt}>
            Our solutions are Reliable, and tailored to consistently exceed{" "}
            {`client's`} expectations
          </div>
          <Image
            src={third}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
