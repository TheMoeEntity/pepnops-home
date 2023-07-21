"use client";
import Image from "next/image";
import styles from "../../../components/index.module.css";
import worker from "../../../public/images/smartx.png";
import dashboard from "../../../public/images/dashboard.png";
import phone from "../../../public/images/phone2.png";
import manage from "../../../public/images/manage.png";
import payment from "../../../public/images/payment.png";
import push from "../../../public/images/push.png";
import reporting from "../../../public/images/reporting.png";
import sos from "../../../public/images/sos.png";
import guide from "../../../public/images/guide.png";
import motor from "../../../public/images/tracker260.jpg";
import fencing from "../../../public/images/fencing.png";
import gps from "../../../public/images/gps.png";
import safety from "../../../public/images/safety.png";
import scheduling from "../../../public/images/scheduling.png";
import security from "../../../public/images/security.png";
import { useEffect, useState } from "react";
import { fetchdata } from "@/helpers";
const SolutionsPage = ({ data }: any) => {
  const [fetchData, setFetch] = useState<fetchdata>(data);
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
  const icons = [gps, fencing, reporting, scheduling, safety, security];
  useEffect(() => {
    if (fetchData.title === "Tracker 360") {
      setAssets(
        assets.map((_x, i) => {
          return {
            icon: icons[i],
            title: fetchData.KeyFeatures.features[i].title,
            text: fetchData.KeyFeatures.features[i].text,
          };
        })
      );
    }
  }, [assets, fetchData.KeyFeatures.features, fetchData.title, icons]);
  return (
    <div className={styles.solutions}>
      <div className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.centered}>
          <h2 style={{ visibility: "hidden" }}>Solutions</h2>
          <h1>{fetchData.title}</h1>
          <h2>
            {/* Efficiently manage your processes and keep track of visitors <br />{" "}
            within your community */}
            {fetchData.capt1}
          </h2>
        </div>
        <Image
          src={fetchData.title === "Smart X" ? worker : motor}
          objectFit="cover"
          alt="card-image"
          layout="fill"
          quality={100}
          priority={true}
          sizes="(max-width: 1000px) 100vw, (max-width: 1920px) 50vw, 33vw"
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
            sizes="(max-width: 1523px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h3>
          {/* The centralised community management system. Customizable to cater
          <br /> for your specific needs. */}
          {fetchData.capt2}
        </h3>
      </div>
      <div className={styles.featured}>
        <div className={styles.key}>
          <h3>KEY FEATURES</h3>
          <p>{fetchData.KeyFeatures.title}</p>
        </div>
        <div className={styles.cards}>
          {assets.map((x, i) => (
            <div key={i}>
              <div className={styles.icons}>
                <Image
                  src={x.icon}
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
        <div className={styles.key + " " + styles.keyTwo}>
          <p style={{ paddingTop: "0px" }} className={styles.action}>
            {fetchData.callToAction}
          </p>
          <button>REQUEST DEMO</button>
        </div>
        {fetchData.showPhone === true && (
          <div className={styles.phone}>
            <Image
              src={phone}
              objectFit="cover"
              alt="Dashboard image"
              fill
              quality={100}
              priority={true}
              sizes="(max-width: 597px) 100vw, (max-width: 100%) 50vw, 33vw"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SolutionsPage;
