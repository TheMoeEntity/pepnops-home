"use client";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import styles from "../../components/index.module.css";
import map from "../../public/images/maps.png";

const ContactForm = () => {
  const [selectedOption, setSelectedOption] =
    useState<String>("Frontend Developer");
  const onOptionChangeHandler = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    console.log("User Selected Value - ", event.target.value);
    setSelectedOption(event.target.value);
  };
  return (
    <div className={styles.contactForm}>
      <div className={styles.form}>
        <div className={styles.left}>
          <div>
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
            <div className={styles.formGroup}>
              <label htmlFor="">Interested Service:</label>
              <select
                className="custom-select"
                style={{ width: "100%" }}
                onChange={onOptionChangeHandler}
              >
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>UI/UX Designer</option>
                <option>Project Manager</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="">Project Budget:</label>
              <select
                className="custom-select"
                style={{ width: "100%" }}
                onChange={onOptionChangeHandler}
              >
                <option>$29k - $40k </option>
                <option>Backend Developer</option>
                <option>UI/UX Designer</option>
                <option>Project Manager</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <textarea
                placeholder="Message"
                name=""
                id=""
                cols={10}
                rows={3}
              ></textarea>
            </div>
            <div className={styles.formGroup}>
              <button>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
