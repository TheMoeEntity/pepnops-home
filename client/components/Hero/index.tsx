"use client";
import styles from "./index.module.css";
import icon2 from "../../public/images/landing3.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        src={icon2}
        alt="card-image"
        fill={true}
        quality={100}
        priority={true}
        sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
      />
      <div className={styles.captions}>
        <h1>
          <motion.div
            initial={{ x: "-300px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1,
              bounce: 0.5,
              type: "spring",
            }}
          >
            Delivering Innovative & Customised Technology Solutions
            <span className={styles.dot}>.</span>
          </motion.div>
        </h1>
        <motion.div
          initial={{ transform: "scale(0.6)", opacity: 0 }}
          animate={{ transform: "scale(1)", opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 1,
            bounce: 0.5,
            type: "spring",
          }}
        >
          <p>
            Staying ahead of {`today's`} fast paced and highly competitive
            technological changes is crucial to success. At pepnops, we
            specialize in delivering cuttting-edge technology solutions that are
            tailored to meet the unique needs of your business.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
