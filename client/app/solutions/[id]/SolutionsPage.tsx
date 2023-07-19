"use client";
import Image from "next/image";
import styles from "../../../components/index.module.css";
import worker from "../../../public/images/smartx.png";
import dashboard from "../../../public/images/dashboard.png";
import phone from "../../../public/images/phone.png";
import icon1 from "../../../public/images/10.png";
import icon2 from "../../../public/images/11.png";
import icon3 from "../../../public/images/12.png";
import { useState } from "react";

const SolutionsPage = () => {
  const [assets, setAssets] = useState<{ text: string; title: string }[]>([
    {
      title: "MANAGE VISITORS",
      text: "This feature allows resident to create instant and scheduled visits for their guests. Residents can also set the duration for one-off and recurring visits",
    },
    {
      title: "ESTATE GUIDE",
      text: "Residents can explore notable locations in the estate. This features helps new residents easily locate places within the estate.",
    },
    {
      title: "REPORTING",
      text: "Easily access the records for previous visits and that of guests withing the estate at every point in time.",
    },
    {
      title: "SOS",
      text: "Residents can easily report an emergency and get help just by the Click of a button.",
    },
    {
      title: "PAYMENT",
      text: "Easily collect all estate payments within our platform. Our Smart X helps with proper invoicing and bookkeeping.",
    },
    {
      title: "PUSH NOTIFICATIONS",
      text: `The Estate would share information with residents as clickable pop-up messages on their devices. That way residents don't get to miss out on vital information.`,
    },
  ]);
  return (
    <div className={styles.solutions}>
      <div className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.centered}>
          <h2>Solutions</h2>
          <h1>Smart-X</h1>
          <h2>
            Efficiently manage your processes and keep track of visitors <br />{" "}
            within your community
          </h2>
        </div>
        <Image
          src={worker}
          objectFit="cover"
          alt="card-image"
          layout="fill"
          quality={100}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.about}>
        <div className={styles.dashboard}>
          <Image
            src={dashboard}
            objectFit="cover"
            alt="Dashboard image"
            fill
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h3>The centralised community management system</h3>
      </div>
      <div className={styles.featured}>
        <div className={styles.key}>
          <h3>KEY FEATURES</h3>
          <p>
            Our SmartX solution provides an effective and efficient way to
            manage your community administrative processes and keep track of
            guests
          </p>
        </div>
        <div className={styles.cards}>
          {assets.map((x, i) => (
            <div key={i}>
              <div className={styles.icons}>
                <Image
                  src={icon1}
                  objectFit="cover"
                  alt="card-image"
                  layout="fill"
                  quality={100}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h2>
                <strong>{x.title}</strong>
              </h2>
              <div>
                <p>{x.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.key}>
          <p className={styles.action}>
            These and many more customizable features are available to suit your
            community management needs.
          </p>
          <button>REQUEST DEMO</button>
        </div>
        <div className={styles.phone}>
          <Image
            src={phone}
            objectFit="cover"
            alt="Dashboard image"
            fill
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
