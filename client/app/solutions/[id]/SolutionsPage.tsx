"use client";
import Image from "next/image";
import styles from "../../../components/index.module.css";
import worker from "../../../public/images/smartx.png";
import dashboard from "../../../public/images/dashboard.png";
import phone from "../../../public/images/phone.png";

const SolutionsPage = () => {
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
        {/* <div className={styles.key}>
          <h3>KEY FEATURES</h3>
          <p>
            Our SmartX solution provides an effective and efficient way <br />
            to manage your community administrative processes and keep track of
            guests
          </p>
        </div> */}
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
        {/* <div className={styles.grid}>
          <div>fdfd</div>
          <div>fdf</div>
          <div>fdfd</div>
          <div>fdfd</div>
          <div></div>
          <div></div>
        </div> */}
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
