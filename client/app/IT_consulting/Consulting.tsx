"use client";
import Image from "next/image";
import styles from "../../components/index.module.css";
import styles2 from "./consulting.module.css";
import manage from "../../public/images/manage.png";
import payment from "../../public/images/payment.png";
import push from "../../public/images/push.png";
import reporting from "../../public/images/reporting.png";
import sos from "../../public/images/sos.png";
import guide from "../../public/images/guide.png";
import { useEffect, useRef, useState } from "react";

const Consulting = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const grid = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", animateIn);
    return () => {
      window.removeEventListener("scroll", animateIn);
    };
  }, []);

  const animateIn = () => {
    let width = container.current;
    let height = window.innerHeight;
    if (width) {
      let revealpoint = 120;
      let revealTop = width.getBoundingClientRect().top;
      if (revealTop < height - revealpoint) {
        width.classList.add(styles2.addWidth);
      }
    }

    if (grid.current) {
      let widths = grid.current.children;
      for (let index = 0; index < widths.length; index++) {
        const element = widths[index];
        let revealTop = element.getBoundingClientRect().top;
        let revealpoint = 120;
        if (revealTop < height - revealpoint) {
          element.classList.add(styles2.addWidth);
        } else {
          element.classList.remove(styles2.addWidth);
        }
      }
    }
  };

  const [assets, _setAssets] = useState<
    { text: string; title: string; icon: any }[]
  >([
    {
      icon: reporting,
      title: "SOFTWARE ASSESSMENT",
      text: "We offer cutting-edge software analysis which involves identifying architectural gaps within your existing software systems, and proposing scalable, maintainable, and efficient technological solutions that align with the long-term objectives.",
    },
    {
      icon: sos,
      title: "SOFTWARE DEVELOPMENT",
      text: "Our expert team partners with businesses to deliver customized software solutions that drive innovation, efficiency, and growth. Our software development consulting services encompass a wide range of expertise. From initial project planning and requirement gathering to design, coding, testing, and deployment, we provide comprehensive consulting services throughout the software development lifecycle.",
    },
    {
      icon: payment,
      title: "WHITE-LABEL SERVICE",
      text: "We work with clients to design and develop end-to-end products that are ready for sale and execution. Our white-label software development service covers a wide range of industries and domains and is also open to businesses seeking to deploy some of our solutions as a third party. T&C Apply.",
    },
    {
      icon: push,
      title: "SYSTEM INTEGRATION",
      text: `We facilitate the integration of different software systems, databases, and APIs to optimize workflows, improve efficiency, and enhance collaboration for businesses. We understand the importance of data security and privacy. We adhere to industry standards and best practices to safeguard your sensitive information and comply with regulatory requirements`,
    },
    {
      icon: push,
      title: "UI/UX DESIGN",
      text: `We provide expertise in designing visually appealing and user-friendly interfaces to enhance user experience. Whether it's web, mobile, or desktop applications, we ensure that your digital product provides a consistent and optimized experience across all devices, enhancing user satisfaction and engagement. We also create wireframes, prototypes, and design systems that align with branding guidelines and best practices.`,
    },

    {
      icon: push,
      title: "PERFORMANCE OPTIMIZATION",
      text: `We provide software optimization services aimed at enhancing software performance. We offer code optimization, database querying, and server configuration for optimal software performance and smooth user experience.`,
    },
    {
      icon: push,
      title: "SYSTEM MODERNIZATION",
      text: `We help businesses modernize and upgrade their outdated software systems. Our Legacy modernization service ranges across software reengineering, re-platforming, or building of new systems based on business requirements. We also facilitate data migration, integration with modern technologies, and knowledge transfer to go with the improvements.`,
    },
  ]);

  const assets2 = [
    {
      icon: guide,
      title: "INNOVATION",
      text: "Easily access the records for previous visits and that of guests.",
    },
    {
      icon: manage,
      title: "COLLABORATION",
      text: "Easily access the records for previous visits and that of guests.",
    },
    {
      icon: reporting,
      title: "EXCELLENCE",
      text: "Easily access the records for previous visits and that of guests.",
    },
  ];
  return (
    <div className={styles.consulting}>
      <div className={styles.itHero}>
        <div className={styles.centered}>
          <h1>
            Partnering for progress: your trusted Ally for collaborative
            software solutions.
          </h1>
          <h1 className={styles.capt3}>
            We work closely with companies and startups to understand their
            specific requirements, challenges, and aspirations. Whether{" "}
            {`it's `}implementing cutting-edge software, adopting new
            development methodologies, or integrating emerging technologies, we
            provide guidance and support at every step of the journey.
          </h1>
        </div>
        <div className={styles.overlay}></div>
      </div>
      <div id="services" className={styles2.products}>
        <div ref={container} className={styles2.caption}>
          {/* <b>
            Partnering for progress: your trusted Ally for collaborative
            software solutions
          </b> */}

          <div className={styles.closely}>
            Staying ahead of the curve can be a daunting task as there are a lot
            of new challenges involved in keeping up with the rapid
            technological change. {`That's`} where we come in. Our software
            consulting services are designed to empower businesses by enabling
            them to embrace emerging technologies, build digital solutions, and
            create a scalable IT strategy that aligns with their budget and
            vision.
          </div>
          <h2>Our Services</h2>
        </div>
        <div ref={grid} className={styles2.grid}>
          {assets.map((x, i) => (
            <div key={i}>
              <div className={styles2.overlay}>
                <div>READ MORE</div>
              </div>
              {/* <div className={styles2.topIcon}>
                <Image
                  src={payment}
                  alt="card-image"
                  fill={true}
                  quality={100}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div> */}
              <div>
                <h4>{x.title}</h4>
              </div>
              <div className={styles2.detail}>{x.text}</div>
              {/* <div className={styles2.learn}>
                LEARN MORE <i>&#10230;</i>
              </div> */}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.chooseUs}>
        <h2>Why Choose PEPNOPS?</h2>
        <h3>
          We are a company committed to excellence. Our high level of
          professionalism is reflected in our cutting-edge technologies and
          strategic solutions designed to unlock your full potential.
        </h3>
        <div className={styles.cards}>
          {assets2.map((x, i) => (
            <div className={styles.cardDiv} key={i}>
              <div className={styles.icons}>
                <Image
                  src={x.icon}
                  alt="card-image"
                  fill={true}
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
        <div className={styles.key}>
          <p style={{ paddingTop: "0px" }} className={styles.action}>
            {`Let's`} build something amazing together.
          </p>
          <button>GET IN TOUCH</button>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
