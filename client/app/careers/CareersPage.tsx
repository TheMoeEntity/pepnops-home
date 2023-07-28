"use client";
import styles from "../../components/index.module.css";
import Image from "next/image";
import mac from "../../public/images/tech3.png";
import man from "../../public/images/cons3_1.webp";
import Link from "next/link";
import TypeEffect from "./TypeEffect";
import { useRef } from "react";
import { useAnimation } from "@/helpers/useAnimation";
import { assets8 } from "@/helpers";

const CareersPage = () => {
  const grid = useRef<null | HTMLDivElement>(null);
  useAnimation(grid, styles.addWidth, true);
  return (
    <div className={styles.careers}>
      <div className={styles.careerHero}>
        <div className={styles.overlay}></div>
        <div className={styles.centered}>
          <h1>
            <TypeEffect />
          </h1>
        </div>
      </div>
      <div className={styles.why}>
        <h2>Why Join Us?</h2>

        <div className={styles.whyChoose}>
          <div>
            <Image
              src={mac}
              alt="hero-image"
              fill={true}
              quality={100}
              priority={true}
              sizes="(max-width: 1000px) 100vw, (max-width: 1920px) 50vw, 33vw"
            />
          </div>
          <div>
            <h2>You Matter!</h2>
            <p>
              At Pepnops, we believe that people and their opinions matter. We
              are passionate about creating a collaborative and inclusive work
              environment where {`everyone's`} voice is valued. We understand
              that our success as a company is built upon the unique
              perspectives and contributions of each team member. {`That's`} why
              we are dedicated to fostering an atmosphere that encourages open
              communication, creativity, and growth.
            </p>
          </div>
        </div>

        <div ref={grid} className={styles.cards}>
          {assets8.map((x, i) => (
            <div className={styles.cardDiv} key={i}>
              <div className={styles.icons}>
                <Image
                  src={x.icon}
                  alt="card-image"
                  fill={true}
                  quality={100}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h2>
                <strong>{x.title}</strong>
              </h2>
              <div>
                <p style={{ fontSize: "12px", height: "300px" }}>{x.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.call}>
          <h3>See where you fit in</h3>
          <h2>Join our community and Help define it.</h2>
          <p>Ready to join us? Take the bold step today!</p>

          <button>
            <a
              target={`_blank`}
              rel="noopener noreferrer"
              href="mailto:career@pepnops.com"
            >
              APPLY NOW
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export { CareersPage };
