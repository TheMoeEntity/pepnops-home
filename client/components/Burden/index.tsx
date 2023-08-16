"use client";
import { Fade } from "react-slideshow-image";
import styles from "./index.module.css";
import "react-slideshow-image/dist/styles.css";
import { ServicesAssets } from "@/helpers";
const Burden = () => {
  return (
    <div className={styles.burden}>
      <div></div>
      <div>
        <h2 className={styles.burd}>
          {`Let's`} take <br /> these <br />
          <span>
            burdens <br /> off you.
          </span>
        </h2>
        <p>
          Unlock growth and efficiency with our expert IT <br /> consulting and
          outsourcing services.
        </p>
        <div className={`slide-container ${styles.cont}`}>
          <Fade
            arrows={true}
            infinite={true}
            duration={7000}
            transitionDuration={400}
          >
            {ServicesAssets.map((x, i) => (
              <div key={i} className={styles.hero}>
                <div className={styles.caption}>
                  <h2>{x.title}</h2>
                  <p>{x.text}</p>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Burden;
