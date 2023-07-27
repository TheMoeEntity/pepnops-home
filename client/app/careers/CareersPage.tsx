"use client";
import styles from "../../components/index.module.css";
import Image from "next/image";
import innovation from "../../public/images/innovation.png";
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
        <Image
          src={man}
          alt="hero-image"
          fill={true}
          style={{ backgroundPosition: "left", backgroundSize: "cover" }}
          quality={100}
          priority={true}
          sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
        />
        <div className={styles.overlay}></div>
        <div className={styles.centered}>
          <h1>
            <TypeEffect />
          </h1>
          <p className={styles.capt4}>
            At Pepnops, we believe that people and their opinions matter. We are
            passionate about creating a collaborative and inclusive work
            environment where {`everyone's`} voice is valued. We understand that
            our success as a company is built upon the unique perspectives and
            contributions of each team member. {`That's`} why we are dedicated
            to fostering an atmosphere that encourages open communication,
            creativity, and growth.
          </p>
        </div>
      </div>
      <div className={styles.why}>
        <h2>Why Join Us?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          obcaecati nesciunt alias ea perspiciatis asperiores, ipsam tempore et
          eveniet quis molestias iusto nisi est rem cumque quod impedit maxime
          officia odio nemo? Incidunt accusantium maxime, earum quasi ut cumque
          animi?
        </p>

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
                <p style={{ fontSize: "12px" }}>{x.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.call}>
          <h3>See where you fit in</h3>
          <h2>Join our community and Help define it.</h2>
          <p>Ready to join us? Take the bold step today!</p>

          <Link href="/contact" prefetch={false}>
            <button>APPLY NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { CareersPage };
