import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import logo from "../../public/images/footer2.png";
import icon1 from "../../public/images/10.png";
import icon2 from "../../public/images/11.png";
import icon3 from "../../public/images/12.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.logo}>
            <Image
              src={logo}
              objectFit="cover"
              alt="card-image"
              fill
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tempor in cididunt ut labore.
          </p> */}
        </div>
        <div>
          <h2>CONTACT INFO</h2>
          <div>
            <div style={{ width: "22px", height: "22px" }}>
              <Image
                src={icon1}
                objectFit="cover"
                alt="card-image"
                fill
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>Lagos, Nigeria</div>
          </div>

          <div>
            <div style={{ width: "22px", height: "22px" }}>
              <Image
                src={icon2}
                objectFit="cover"
                alt="card-image"
                fill
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>(+234) 807 548 9362</div>
          </div>
          <div>
            <div style={{ width: "22px", height: "22px" }}>
              <Image
                src={icon3}
                objectFit="cover"
                alt="card-image"
                fill
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>biz@pepnops.com</div>
          </div>
        </div>
        <div>
          <h2>OUR SOLUTIONS</h2>
          <div>
            <i className="fa fa-angle-right"></i>
            Smart X
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Tracker 360
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            IT Consulting
          </div>
        </div>
        <div>
          <h2>COMPANY</h2>
          <div>
            <i className="fa fa-angle-right"></i>
            About Us
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Careers
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Contact us
          </div>
          <div>
            {/* <i className="fa fa-angle-right"></i> */}
            <div className={styles.icons}>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <div>© 2023 Pepnops Inc. </div>
      </div>
    </div>
  );
};

export default Footer;
