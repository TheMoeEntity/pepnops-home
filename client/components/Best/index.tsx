"use client";
import Image from "next/image";
import styles from "./index.module.css";
import brill from "../../public/images/Bril project.png";

const Best = () => {
  return (
    <div className={styles.best}>
      <div className={styles.grid}>
        <div>
          <h2>
            <span>We give our Clients the best </span>
            run of value for <br /> their Money.
          </h2>{" "}
          <br />
          <p>
            Check out some of our <br /> awesome projects.
          </p>
        </div>
        <div>
          <div className={styles.image}>
            <Image
              src={brill}
              alt="Brill product design"
              fill={true}
              quality={100}
              priority={true}
              sizes="(max-width: 2000px) 100vw, (max-width: 2000px) 50vw, 33vw"
            />
          </div>
          <div className={styles.details}>
            <b>PRODUCT DESIGN AND PROCESS AUTOMATION FOR BRIL WATER</b>
          </div>
        </div>
      </div>

      <p>
        At Pepnops, Our Customers are our superstars, and we treat them as such.
        Some choose us for our attention to detail in ensuring excellence is at
        the helm of everything we do. Some love us for how we think in solving
        the problems we solve, others {`can't `}help but love our competent team
        of intriguing personalities.
      </p>
    </div>
  );
};

export default Best;
