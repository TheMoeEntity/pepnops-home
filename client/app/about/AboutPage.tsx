"use client";
import Image from "next/image";
import styles from "../../components/index.module.css";
import man from "../../public/images/group-9.jpeg";
import mac from "../../public/images/abt.png";
import shake from "../../public/images/about2.png";
import goals from "../../public/images/about1.png";
import { useEffect } from "react";
import james from "../../public/images/James.jpeg";

const AboutPage = () => {
  useEffect(() => {
    window.addEventListener("scroll", animateIn);
    return () => {
      window.removeEventListener("scroll", animateIn);
    };
  }, []);

  const animateIn = () => {
    let height = window.innerHeight;
    //   let widths = grid.current.children;
    let widths = document.getElementsByClassName("anim");

    for (let index = 0; index < widths.length; index++) {
      const element = widths[index];
      let revealTop = element.getBoundingClientRect().top;
      let revealpoint = 160;
      if (revealTop < height - revealpoint) {
        element.classList.add(styles.addWidth);
      }
      //    else {
      //     element.classList.remove(styles.addWidth);
      //   }
    }
  };
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
          <h2>Hi,{` we're `}PEPNOPS Inc.</h2>
          <p>
            Pepnops Inc. is a leading IT solutions company committed to
            delivering innovative and customized technology solutions across
            different industries. Our expert team of developers and engineers
            are dedicated to providing cutting-edge solutions that are tailored
            to meet the unique needs of your business. <br /> <br /> We are
            committed to delivering solutions that are reliable, and tailored to
            consistently exceed clients expectations, engineers and IT
            professionals has a proven track record of delivering top-notch
            software development, web and mobile application development, data
            management, IT consulting, and digital marketing services to clients
            across the globe.
          </p>
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

      <div className={styles.aboutSection2}>
        <div className="anim">
          <Image
            src={shake}
            alt="hero-image"
            fill={true}
            quality={100}
            priority={true}
            sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
          />
        </div>
        <div className="anim">
          <h2>Our Mission</h2>
          <p>
            Our mission is to prvide innovative and comprehensive technology
            solutions across multiple industries through a collaborative and
            client-focused approach. <br /> <br /> We strive to be the most
            trusted and reliable IT solutions provider in the industry committed
            to delivering superior quality services and building long-term
            relationships, based on mutual trust and respect, while exceeding
            our {`client's`} expectations in every step of the way.
          </p>
        </div>
      </div>

      <div className={styles.aboutSection}>
        <div className="anim">
          <h2>Our Goals</h2>
          <p>
            At pepnops Inc. our goal is to be the go-to IT solutions provider
            for clients in a variety of industries. <br /> <br /> We strive to
            continually provide innovative and customized solutions to meet the
            unique needs of each unique client, by investing in the latest
            technologies, recruiting and retaining the best talents, and staying
            current with the latest trends and best practices in the industry.
          </p>
        </div>
        <div className="anim">
          <Image
            src={goals}
            alt="hero-image"
            fill={true}
            quality={100}
            priority={true}
            sizes="(max-width: 464px) 100vw, (max-width: 100%) 50vw, 33vw"
          />
        </div>
      </div>
      <div className={styles.ourTeam}>
        <div className={styles.title}>
          <h2>Our Team</h2>
          <p>
            Pepnops Inc. boasts of a forward-thinking leadership team with
            extensive domain expertise that fosters a culture performance. We
            have a remarkable group of technopreneurs and seasoned advisors with
            a proven track record of success.
          </p>
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
                <h3>CLEVER EGUASA</h3>
                <span>CEO</span>
                {/* <div className={styles.icons}>
                  <a
                    target={`_blank`}
                    rel="noopener noreferrer"
                    href="https://web.facebook.com/Moses.Nwigberi/"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    target={`_blank`}
                    rel="noopener noreferrer"
                    href="https://twitter.com/pepnops"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>

                  <a
                    target={`_blank`}
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/pepnops/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    target={`_blank`}
                    rel="noopener noreferrer"
                    href="https://instagram.com/pepnops"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
          {/* <i className={styles.aria} aria-hidden="true"></i>
          <i className={styles.aria} aria-hidden="true"></i> */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
