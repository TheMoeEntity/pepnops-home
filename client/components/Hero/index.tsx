"use client";
import styles from "./index.module.css";
import icon2 from "../../public/images/landing.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        src={icon2}
        objectFit="cover"
        alt="card-image"
        layout="fill"
        quality={100}
        priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className={styles.captions}>
        <h1>
          Delivering Innovative & <br /> Customised Technology <br /> Solutions
          <span style={{ color: "#00D169" }}>.</span>
        </h1>
        <p>
          Staying ahead of {`today's`} fast paced and highly competitive
          technological changes is crucial to success. At pepnops, we specialize
          in delivering cuttting-edge technology solutions that are tailored to
          meet the unique needs of your business
        </p>
      </div>
    </div>
  );
};

export default Hero;