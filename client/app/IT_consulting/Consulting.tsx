"use client";
import Image, { StaticImageData } from "next/image";
import styles from "../../components/index.module.css";
import styles2 from "./consulting.module.css";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useAnimation } from "@/helpers/useAnimation";
import { assets2, ServicesAssets } from "@/helpers";

const Consulting = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const grid = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useAnimation(grid, styles2.addWidth, true, container);

  const [assets, _setAssets] =
    useState<{ text: string; title: string; icon: StaticImageData }[]>(
      ServicesAssets
    );

  return (
    <div className={styles.consulting}>
      <div className={styles.itHero}>
        <div className={styles.centered}>
          <h1>
            Partnering for progress: your trusted Ally for collaborative
            software solutions.
          </h1>
          <h1 className={styles.capt3}>
            We work closely with organizations and startups to understand their
            specific software requirements, challenges, and aspirations. Whether
            {` it's `}implementing automated processes, adopting new development
            methodologies, or integrating emerging technologies, we provide
            guidance and support at every step of the journey.
          </h1>
        </div>
        <div className={styles.overlay}></div>
      </div>
      <div id="services" className={styles2.products}>
        <div ref={container} className={styles2.caption}>
          <div className={styles.closely}>
            Staying ahead of the curve can be a daunting task as there are a lot
            of new challenges involved in keeping up with the rapid
            technological change. {`That's`} where we come in. Our software
            consulting services are designed to empower businesses by enabling
            them to embrace emerging technologies, build digital solutions, and
            create a scalable IT strategy that aligns with their budget and
            vision.
          </div>
          <h2>Our Services</h2>
        </div>
        <div ref={grid} className={styles2.grid}>
          {assets.map((x, i) => (
            <div key={i}>
              <div className={styles2.overlay}>
                <div>READ MORE</div>
              </div>
              {/* <div className={styles2.topIcon}>
                <Image
                  src={payment}
                  alt="card-image"
                  fill={true}
                  quality={100}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div> */}
              <div>
                <h4>{x.title}</h4>
              </div>
              <div className={styles2.detail}>{x.text}</div>
              {/* <div className={styles2.learn}>
                LEARN MORE <i>&#10230;</i>
              </div> */}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.chooseUs}>
        <h2>Why Pepnops?</h2>
        <h3>
          We are a company committed to excellence. Our high level of
          professionalism is reflected in our cutting-edge technologies and
          strategic solutions designed to unlock your full potential.
        </h3>
        <div className={styles.cards}>
          {assets2.map((x, i) => (
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
        <div className={styles.key}>
          <p style={{ paddingTop: "0px" }} className={styles.action}>
            {`Let's`} build something amazing together.
          </p>
          <button onClick={() => router.push("/contact")}>GET IN TOUCH</button>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
