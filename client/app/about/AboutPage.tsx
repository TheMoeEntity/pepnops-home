"use client";
import Image from "next/image";
import styles from "../../components/index.module.css";
import man from "../../public/images/group-9_1.webp";
import mac from "../../public/images/abt.png";
import { useEffect, useState } from "react";
import james from "../../public/images/mr clever.jpeg";
import { useAnimation } from "@/helpers/useAnimation";
import TypeEffect from "../careers/TypeEffect";

const AboutPage = () => {
  const [anim, setAnim] = useState<any>(null);
  useEffect(() => {
    setAnim(document.getElementsByClassName("anim"));
  }, []);

  useAnimation(anim, styles.addWidth, false);

  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutHero}>
        <video autoPlay loop muted playsInline className={styles.backVideo}>
          <source src="/videos/comp1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.intro}>
        <div className={styles.introGrid}>
          <div>
            <span>At Pepnops</span>
            <h2>We are Passionate about Transforming</h2>
            <h2>
              <span>
                <TypeEffect />
              </span>
            </h2>
          </div>
          <div>
            <Image
              src={mac}
              alt="pepnops"
              fill={true}
              quality={100}
              priority={true}
              sizes="(max-width: 464px) 100vw, (max-width:100%) 50vw, 33vw"
            />
          </div>
        </div>
        <p>
          Our team, driven by expertise and insight, crafts solutions that not
          only simplify processes but also amplify potential. As we guide
          businesses towards a seamless digital future, we remain steadfast in
          our commitment to embracing ease at every step of the journey.
        </p>
      </div>
      <div className={styles.missionGrid}>
        <div className={styles.mission}>
          <div>
            <h2>OUR VISION</h2>
            <p>
              To be at the forefront of technological advancement pioneering a
              society where people and businesses experience stress-free
              functionality & efficiency in every sector and sphere of life
              possible.
            </p>
          </div>
          <div>
            <h2>OUR MISSION</h2>
            <p>
              We are on a mission to guide individuals and businesses towards
              success, simplifying their journey and eliminating stress.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.ourTeam}>
        <div className={styles.title}>
          <h2>
            Meet the <span>Innovators</span> <br /> Shaping Our Journey
          </h2>
        </div>
        <div className={styles.cardss}>
          {[...Array(6)].map((_x, i) => (
            <div key={i}>
              <div className={styles.img}>
                <Image
                  src={james}
                  alt="team image"
                  fill={true}
                  quality={100}
                  priority={true}
                  sizes="(max-width: 599px) 100vw, (max-width:100%) 50vw, 33vw"
                />
              </div>
              <div className={styles.teamDetails}>
                <h3>Bright Osarumen Eguasa</h3>
                <span>CEO & Founder</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
