"use client";
import styles from "../index.module.css";
import sponsor1 from "../../public/images/aman.png";
import sponsor2 from "../../public/images/sp2.png";
import sponsor3 from "../../public/images/sp3.png";
import sponsor4 from "../../public/images/sp4.png";
import sponsor5 from "../../public/images/Bril logo.png";
import Image from "next/image";
import { useRef } from "react";
import { thoughtsGrid } from "@/helpers";
import { useRouter } from "next/navigation";

const Sponsors = () => {
  const grid = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  return (
    <div className={styles.sponsors}>
      <div className={styles.title}>
        <h2>
          These <span>clients trust us.</span> <br /> You too can.
        </h2>
      </div>
      <div className={styles.container}>
        <div ref={grid} className={styles.sponsorsGrid}>
          <div>
            <Image
              src={sponsor5}
              alt="sponsors"
              fill={true}
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
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
      <h3>Our thoughts might interest you</h3>
      <div className={styles.thoughtGrid}>
        {thoughtsGrid.map((x, i) => (
          <div key={i}>
            <div className={styles.image}>
              <Image
                src={x.image}
                alt="thoughts tab"
                fill={true}
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.details}>
              <b>{x.text}</b>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: "0 8px" }}>
        <h3>Lets make your next project a world class!</h3>
        <div className={styles.callToAction}>
          <p>
            Reach out to our dedicated team for any inquiries, feedbak, or
            collaboration <br /> opportunities.
            {` We're`} here to assist and eager to connect. {`Let's`} start the{" "}
            <br /> conversation.
          </p>
          <button style={{ backgroundColor: "#167252" }}>
            <a
              target={`_blank`}
              rel="noopener noreferrer"
              href="mailto:biz@pepnops.com"
            >
              Contact Sales
            </a>
          </button>
          <button
            onClick={() => router.push("/contact")}
            style={{ backgroundColor: "#3c3d3c" }}
          >
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
