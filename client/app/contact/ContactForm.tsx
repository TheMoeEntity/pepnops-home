"use client";
import Image from "next/image";
import React, { FormEvent } from "react";
import { ChangeEvent, useRef, useState } from "react";
import styles from "../../components/index.module.css";
import { useSnackbar } from "notistack";

const ContactForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const policyRef = useRef<HTMLInputElement | null>(null);
  const [selectedOption, setSelectedOption] =
    useState<String>("Frontend Developer");
  const onOptionChangeHandler = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    console.log("User Selected Value - ", event.target.value);
    setSelectedOption(event.target.value);
  };
  const inputFile = useRef<HTMLInputElement | null>(null);
  const [currFile, setCurrFile] = useState<string>("No file selected*");
  const [size, setSize] = useState("2MB");
  const [userFile, setUserFile] = useState<File | null>(null);
  const openFiles = () => {
    if (inputFile.current) inputFile.current.click();
  };
  function formatBytes(bytes: number, decimals = 2) {
    if (!+bytes) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }
  const handleFileSelected = (e: ChangeEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files;
    // const files = Array.from(e.target as HTMLInputElement).files
    if (!files) return;
    console.log(files[0]);
    setSize(formatBytes(files[0].size));
    setCurrFile(files[0].name + ", " + size);
    setUserFile(files[0]);
    console.log(userFile);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (policyRef.current) {
      if (!policyRef.current.checked) {
        enqueueSnackbar(
          `You are to agree to pepnops' privacy policy
          and non disclosure agreement.  `,
          {
            variant: "error",
          }
        );
      }
    }
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
            <button>
              <a
                target={`_blank`}
                rel="noopener noreferrer"
                href="mailto:info@pepnops.com"
              >
                info@pepnops.com
              </a>
            </button>
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
          <form onSubmit={handleSubmit}>
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
              <i onClick={openFiles} className="fas fa-file"></i>
              {currFile}
            </div>
            <div className={styles.formGroup}>
              <label
                style={{ fontSize: "small", fontWeight: "200" }}
                className="container"
              >
                I would like to receive information, news and events about
                pepnops Inc. Policy.
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className={styles.formGroup}>
              <label
                style={{ fontSize: "small", fontWeight: "200" }}
                className="container"
              >
                By submitting this form I agree to {`pepnops'`} privacy policy
                and non disclosure agreement.
                <input ref={policyRef} type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <input
              onChange={(e) => handleFileSelected(e)}
              type="file"
              id="file"
              ref={inputFile}
              style={{ display: "none" }}
            />

            <div className={styles.formGroup}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
