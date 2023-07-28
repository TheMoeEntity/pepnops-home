import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import logo from "../../public/images/footer2.png";
import icon1 from "../../public/images/10.png";
import icon2 from "../../public/images/11.png";
import icon3 from "../../public/images/12.png";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div onClick={() => router.push("/")} className={styles.logo}>
            <Image
              src={logo}
              alt="card-image"
              fill
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div>
          <h2>CONTACT INFO</h2>
          <div>
            <div style={{ width: "22px", height: "22px" }}>
              <Image
                src={icon1}
                alt="card-image"
                fill
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>(+234) 916 912 6429</div>
          </div>

          <div>
            <div style={{ width: "22px", height: "22px" }}>
              <Image
                src={icon2}
                alt="card-image"
                fill
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>biz@pepnops.com</div>
          </div>

          <div>
            <div style={{ width: "22px", height: "22px" }}>
              <Image
                src={icon3}
                alt="card-image"
                fill
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>Lagos, Nigeria</div>
          </div>
        </div>
        <div>
          <h2>OUR SOLUTIONS</h2>
          <div>
            <Link href={"/solutions/smartx"}>
              <i className="fa fa-angle-right"></i>
              Smart X
            </Link>
          </div>
          <div>
            <Link href={"/solutions/tracker_360"}>
              <i className="fa fa-angle-right"></i>
              Tracker 360
            </Link>
          </div>
          <div>
            <Link href={"/IT_consulting"}>
              <i className="fa fa-angle-right"></i>
              IT Consulting
            </Link>
          </div>
        </div>
        <div>
          <h2>COMPANY</h2>
          <div>
            <Link href={"/about"}>
              <i className="fa fa-angle-right"></i>
              About Us
            </Link>
          </div>
          <div>
            <Link href={"/careers"}>
              <i className="fa fa-angle-right"></i>
              Careers
            </Link>
          </div>
          <div>
            <Link href={"/contact"}>
              <i className="fa fa-angle-right"></i>
              Contact Us
            </Link>
          </div>
          <div>
            {/* <i className="fa fa-angle-right"></i> */}
            <div className={styles.icons}>
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
