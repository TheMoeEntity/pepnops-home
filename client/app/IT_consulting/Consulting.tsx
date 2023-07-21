"use client";
import Image from "next/image";
import styles from "../../components/index.module.css";
import styles2 from "./consulting.module.css";
import manage from "../../public/images/manage.png";
import payment from "../../public/images/payment.png";
import push from "../../public/images/push.png";
import reporting from "../../public/images/reporting.png";
import sos from "../../public/images/sos.png";
import guide from "../../public/images/guide.png";
import { useRef, useState } from "react";

const Consulting = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const grid = useRef<HTMLDivElement | null>(null);

  const [assets, setAssets] = useState<
    { text: string; title: string; icon: any }[]
  >([
    {
      icon: manage,
      title: "MANAGE VISITORS",
      text: "This feature allows resident to create instant and scheduled visits for their guests. Residents can also set the duration for one-off and recurring visits.",
    },
    {
      icon: guide,
      title: "COMMUNITY GUIDE",
      text: "Residents can explore notable locations in the community. This features helps new residents easily locate places within the community.",
    },
    {
      icon: reporting,
      title: "REPORTING",
      text: "Easily access the records for previous visits and that of guests withing your estate, offices, service apartments, etc at every point in time.",
    },
    {
      icon: sos,
      title: "SOS",
      text: "Residents can easily report an emergency and get help just by the Click of a button.",
    },
    {
      icon: payment,
      title: "PAYMENT",
      text: "Easily automate the collection of payments. Our Smart X solution also helps with proper invoicing and bookkeeping.",
    },
    {
      icon: push,
      title: "PUSH NOTIFICATIONS",
      text: `Share information with residents as clickable pop-up messages on their devices. That way residents don't get to miss out on vital information.`,
    },
  ]);
  return (
    <div className={styles.consulting}>
      <div className={styles.itHero}>
        <div className={styles.centered}>
          {/* <h1>
            Partnering for progress: your trusted Ally for collaborative
            software solutions
          </h1> */}
          <h1>
            Innovation<span>. </span>Collaboration<span>. </span>Excellence
            <span>. </span>
          </h1>
        </div>
        <div className={styles.overlay}></div>
      </div>
      <div id="services" className={styles2.products}>
        <div ref={container} className={styles2.caption}>
          <b>
            Partnering for progress: your trusted Ally for collaborative
            software solutions
          </b>
          <h2>
            Our <span>Servi</span>ces
          </h2>
        </div>
        <div ref={grid} className={styles2.grid}>
          {assets.map((x, i) => (
            <div key={i}>
              <div className={styles2.overlay}>
                <div>READ MORE</div>
              </div>
              <div className={styles2.topIcon}>
                <Image
                  src={payment}
                  objectFit="cover"
                  alt="card-image"
                  layout="fill"
                  quality={100}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div>
                <h4>{x.title}</h4>
              </div>
              <div className={styles2.detail}>{x.text}</div>
              <div className={styles2.learn}>
                LEARN MORE <i>&#10230;</i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consulting;
