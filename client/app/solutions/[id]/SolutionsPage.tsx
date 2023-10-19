"use client";
import Image from "next/image";
import styles from "../../../components/index.module.css";
import styles2 from "./index.module.css";
import worker from "../../../public/images/smartx.png";
import dashboard from "../../../public/images/smartXAdmin.jpg";
import phone from "../../../public/images/pep phone.png";
import reporting from "../../../public/images/reporting.png";
import motor from "../../../public/images/tracker260.jpg";
import fencing from "../../../public/images/fencing.png";
import gps from "../../../public/images/gps.png";
import safety from "../../../public/images/safety.png";
import scheduling from "../../../public/images/scheduling.png";
import security from "../../../public/images/security.png";
import { MouseEvent, useEffect, useState } from "react";
import { assets10, fetchdata, Helpers } from "@/helpers";
import { useRouter } from "next/navigation";
const SolutionsPage = ({ data }: any) => {
  const [fetchData] = useState<fetchdata>(data);
  const router = useRouter();
  const [assets, setAssets] =
    useState<{ text: string; title: string; icon: any }[]>(assets10);
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
  }, []);

  return (
    <div className={styles.solutions}>
      <div className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.centered}>
          <h2 style={{ visibility: "hidden" }}>Solutions</h2>
          <h1>{fetchData.title}</h1>
          <h2>{fetchData.capt1}</h2>
        </div>
        <Image
          src={fetchData.title === "Smart X" ? worker : motor}
          alt="card-image"
          fill={true}
          quality={100}
          priority={true}
          sizes="(max-width: 1000px) 100vw, (max-width: 1920px) 50vw, 33vw"
        />
      </div>
      <div className={styles.about}>
        {fetchData.showPhone && (
          <div className={styles.dashboard}>
            <Image
              src={dashboard}
              alt="Dashboard image"
              fill
              quality={100}
              priority={true}
              sizes="(max-width: 6912px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <span>{fetchData.showPhone && <h3>{fetchData.capt2}</h3>}</span>
      </div>
      <div className={styles2.features}>
        <h2>
          Empowering <br /> <span>Communities,</span> One <br /> Feature at a
          Time.
        </h2>
        <div className={styles2.phoneContainer}>
          <div className={styles2.featuresGrid}>
            <div className={styles2.pepPhone}>
              <Image
                src={phone}
                alt="Phone"
                fill
                quality={100}
                priority={true}
                sizes="(max-width: 1080px) 100vw, (max-width: 100%) 50vw, 33vw"
              />
            </div>
            <div>
              <div className={`${styles2.create}`}>
                <div>
                  <h3>AWESOME FEATURES </h3>
                  <p>
                    This feature offers residents a seamless way to schedule
                    immediate or future guest visits, whether {`they're`}{" "}
                    one-time or recurring, ensuring effortless community
                    coordination and convenience.
                  </p>
                </div>
              </div>
              <div
                onClick={(e) => Helpers.showDetails(e)}
                className={styles2.cardInfo}
              >
                CREATE VISIT
              </div>
              <div className={styles2.cardInfo}>
                This feature offers residents a seamless way to schedule
                immediate or future guest visits, whether {`they're`} one-time
                or recurring, ensuring effortless community coordination and
                convenience.
              </div>
              <div
                onClick={(e) => Helpers.showDetails(e)}
                className={styles2.cardInfo}
              >
                COMMUNITY GUIDE
                {/* <i className="fa-solid fa-angle-down"></i> */}
              </div>
              <div className={styles2.cardInfo}>
                Residents can effortlessly navigate and discover key spots
                within the community, ensuring newcomers smoothly integrate and
                familiarize themselves with their surroundings.
              </div>
              <div
                onClick={(e) => Helpers.showDetails(e)}
                className={styles2.cardInfo}
              >
                REPORTING
              </div>
              <div className={styles2.cardInfo}>
                Effortlessly retrieve historical guest records within your
                estate, offices, and service apartments, ensuring convenient
                access to past visit information whenever you need it.
              </div>
              <div
                onClick={(e) => Helpers.showDetails(e)}
                className={styles2.cardInfo}
              >
                SOS
              </div>
              <div className={styles2.cardInfo}>
                With a simple click, residents can swiftly report emergencies
                and receive assistance, ensuring peace of mind and smooth crisis
                management.
              </div>
              <div
                onClick={(e) => Helpers.showDetails(e)}
                className={styles2.cardInfo}
              >
                PAYMENT MANAGER
              </div>
              <div className={styles2.cardInfo}>
                Simplify payment collection through automated processes. Our
                Smart X solution also facilitates accurate invoicing and
                hassle-free bookkeeping, streamlining your financial management
                effortlessly.
              </div>
              <div
                onClick={(e) => Helpers.showDetails(e)}
                className={styles2.cardInfo}
              >
                PUSH NOTIFICATION
              </div>
              <div className={styles2.cardInfo}>
                Deliver vital information directly to residents via clickable
                pop-up notifications, ensuring they stay informed in real-time
                without missing out on crucial updates.
              </div>
            </div>
          </div>
        </div>
        <div className={styles2.callTo}>
          <p>
            Our community management software was designed with user-centric
            convenience in mind, and a goal to effortlessly bridge the gaps
            between essential processes and daily needs.
          </p>
          <p>
            <b>Ready to elevate your community experience?</b>
          </p>
          <button>Talk to us</button>
        </div>
      </div>
      {/* <div className={styles.featured}>
        <div className={styles.key}>
          <h3>Key Features</h3>
          <p>{fetchData.KeyFeatures.title}</p>
        </div>
        <div className={styles.cards}>
          {assets.map((x, i) => (
            <div key={i}>
              <div className={styles.icons}>
                <Image
                  src={x.icon}
                  alt="card-image"
                  fill={true}
                  style={{ objectFit: "contain" }}
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
          <button onClick={() => router.push("/contact")}>REQUEST DEMO</button>
        </div>
        {fetchData.showPhone === true && (
          <div className={styles.phone}>
            <Image
              src={phone}
              alt="Dashboard image"
              fill
              quality={100}
              priority={true}
              sizes="(max-width: 1080px) 100vw, (max-width: 100%) 50vw, 33vw"
            />
          </div>
        )}
      </div> */}
    </div>
  );
};

export default SolutionsPage;
