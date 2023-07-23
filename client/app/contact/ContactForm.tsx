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
                <a
                  target={`_blank`}
                  rel="noopener noreferrer"
                  href="https://wa.me/+2348119264151"
                >
                  +234 811 926 4151
                </a>
              </li>
              <li>
                <i className="fa fa-angle-right"></i>
                <i className="fa-solid fa-envelope"></i>

                <a
                  target={`_blank`}
                  rel="noopener noreferrer"
                  href="mailto:biz@pepnops.com"
                >
                  biz@pepnops.com
                </a>
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
            <br />
            <div className={styles.maps}>
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ikoyi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <form action="">
            {/* <h1>Contact Details</h1> */}
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
                <option>--Choose--</option>
                <option>General Consulting</option>
                <option>Product Demo</option>
                <option>Partnership</option>
                <option>Free Demo</option>
                <option>Others</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="">Project Budget:</label>
              <select
                className="custom-select"
                style={{ width: "100%" }}
                onChange={onOptionChangeHandler}
              >
                <option>--Choose--</option>
                <option>Below $10k </option>
                <option>$10k - $49k </option>
                <option>$50k - $249k </option>
                <option>$150k - $499k </option>
                <option>$500k and above</option>
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
              <label htmlFor="">Attach File:</label>
              <i className="fas fa-file"></i>
              No file selected*
            </div>
            <div className={styles.formGroup}>
              <label
                style={{ fontSize: "small", fontWeight: "200" }}
                className="container"
              >
                I would like to receive information about pepnops inc. news and
                events. By submitting this form, you agree to our Privacy
                Policy.
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className={styles.formGroup}>
              <label
                style={{ fontSize: "small", fontWeight: "200" }}
                className="container"
              >
                I want a copy of the NDA
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
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
