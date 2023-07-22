"use client";
import Image from "next/image";
import styles from "../../components/index.module.css";
import map from "../../public/images/maps.png";

const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <div className={styles.form}>
        <div className={styles.left}>
          <h1>Get in Touch</h1>
          <p>
            To purchase or request a demo for either of our products and
            services, please fill in the form or reach us via:
          </p>
          <ul>
            <li>
              <i className="fa fa-angle-right"></i>
              <i className="fa-solid fa-phone"></i>
              +234 916 912 6429
            </li>
            <li>
              <i className="fa fa-angle-right"></i>
              <i className="fa-solid fa-envelope"></i>
              <b>Email: </b> biz@pepnops.com
            </li>
          </ul>
          <p>
            For general enquiries and to speak directly with an expert kindly
            reach us via:
          </p>{" "}
          <button>info@pepnops.com</button>
          <h3>Head Office:</h3>
          <div>
            <i className="fa-solid fa-building"></i>
            Ikoyi, Lagos State, Nigeria.
          </div>
          <div className={styles.maps}>
            <Image
              src={map}
              alt="Ikoyi map"
              fill={true}
              quality={100}
              priority={true}
              sizes="(max-width: 1312px) 100vw, (max-width: 100%) 50vw, 33vw"
            />
          </div>
        </div>
        <div className={styles.right}>
          <form action="">
            <h1>Contact Details</h1>
            <div className={styles.formGroup}>
              <label htmlFor="">Full Name:</label>
              <input type="text" name="" id="" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="">Email:</label>
              <input type="text" name="" id="" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="">Phone:</label>
              <input type="text" name="" id="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
