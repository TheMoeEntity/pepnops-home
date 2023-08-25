"use client";
import Image from "next/image";
import styles from "../../components/index.module.css";
import man from "../../public/images/group-9_1.webp";
import mac from "../../public/images/abt.png";
import { useEffect, useState } from "react";
import james from "../../public/images/mr clever.jpeg";
import { useAnimation } from "@/helpers/useAnimation";

const AboutPage = () => {
  const [anim, setAnim] = useState<any>(null);
  useEffect(() => {
    setAnim(document.getElementsByClassName("anim"));
  }, []);

  useAnimation(anim, styles.addWidth, false);

  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutHero}>
        <div className={styles.centered}>
          <h1>
            Innovation<span>. </span>
            Collaboration<span>. </span>
            Excellence<span>. </span>
          </h1>
        </div>
        <Image
          src={man}
          alt="hero-image"
          fill={true}
          quality={100}
          priority={true}
          sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
        />
      </div>
      <div className={styles.aboutSection}>
        <div className="anim">
          <span>
            <b>At Pepnops</b>
          </span>
          <h2>
            We are <br />
            Passionate <br />
            about <br />
            transforming <br />
            <span>LIVES</span>
          </h2>
        </div>
        <div className="anim">
          <Image
            src={mac}
            alt="hero-image"
            fill={true}
            quality={100}
            priority={true}
            sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
          />
        </div>
      </div>
      <p>
        <b>
          Our team, driven by expertise and insight, crafts solutions that not
          only simplify processes but also amplify potential. As we guide
          businesses towards a seamless digital future, we remain steadfast in
          our commitment to embracing ease at every step of the journey.
        </b>
      </p>
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
