"use client";
import styles from "../../components/index.module.css";
import Image from "next/image";
import mac from "../../public/images/tech3.png";
import man from "../../public/images/cons3_1.webp";
import Link from "next/link";
import TypeEffect from "./TypeEffect";
import { useRef } from "react";
import { useAnimation } from "@/helpers/useAnimation";
import { assets8, careerCards } from "@/helpers";

const CareersPage = () => {
  const grid = useRef<null | HTMLDivElement>(null);
  useAnimation(grid, styles.addWidth, true);
  return (
    <div className={styles.careers}>
      <div className={styles.careerHero}>
        <div className={styles.overlay}></div>
        <div className={styles.centered}>
          {/* <h1>
            <TypeEffect />
          </h1> */}
          <h1>
            Turn <span>Your</span> Passion into Their
            <span> Progress</span>.
          </h1>
          <h2>
            Embrace a career where your passion fuels progress for individuals
            and businesses alike. Your journey with us is a catalyst for their
            success.
          </h2>
          <div>
            <button>APPLY NOW</button>
          </div>
        </div>
      </div>
      <div className={styles.why}>
        {/* <h2>Why Join Us?</h2> */}

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
              At Pepnops, {`we're `}driven by the belief that your passion
              propels progress. Each voice, every perspective, is crucial in our
              collaborative space. We thrive on the diversity of ideas, actively
              promoting open conversations, innovation, and continuous growth.
              With us, your dedication and insights lay the foundation for
              mutual advancement and success.
            </p>
          </div>
        </div>
        <h2>
          Why <span>Pepnops?</span>
        </h2>
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
        <h2>
          Your <span>Career</span> Journey Starts Here
        </h2>
        <p>
          Whether {`you're`} a seasoned professional or just starting your
          career, Pepnops offers a dynamic environment that encourages growth,
          creativity, and impact.
        </p>
        <div className={styles.careerCards}>
          {careerCards.map((x, i) => (
            <div key={i}>
              <h4>
                <b>{x.title}</b>
              </h4>
              <div>{x.text}</div>
            </div>
          ))}
        </div>
        <div className={styles.call}>
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
