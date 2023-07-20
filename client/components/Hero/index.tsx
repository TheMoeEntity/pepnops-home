"use client";
import styles from "./index.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.captions}>
        <h1>
          Delivering Innovative & Customised Technology
          <span className={styles.move}> Solutions</span>
          <span className={styles.dot}>.</span>
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
