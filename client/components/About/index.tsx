import styles from "../index.module.css";
import shake from "../../public/images/shake.jpg";
import laptop from "../../public/images/laptop.jpg";
import third from "../../public/images/third.jpg";
import Image from "next/image";
const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.title}>
        <h2>
          We have all the technology <br />
          solution you need.
        </h2>
        <p>Pepnops Inc. provides and customized software solutions</p>
      </div>
      <div className={styles.grid}>
        <div>
          <div className={styles.capt}>
            Why <br />
            Choose <br />
            US
          </div>
          <Image
            src={shake}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <div className={styles.capt}>
            We have <br />over a decade of collective experience
          </div>
          <Image
            src={laptop}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <div className={styles.capt}>
            Our solutions are Reliable, and tailored to consistently exceed client's expectations
          </div>
          <Image
            src={third}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
