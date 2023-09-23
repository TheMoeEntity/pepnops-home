import styles from "./index.module.css";
import Image from "next/image";
import worker from "../../public/images/smartx.png";
import worker2 from "../../public/images/tracker260.jpg";
import worker3 from "../../public/images/ehr.png";
import Link from "next/link";
const Products = () => {
  return (
    <div id="solutions" className={styles.products}>
      <div className={styles.title}>
        <h2>
          Simplify your world, <br />
          <span className={styles.amp}>Amplify</span> your
          <span className={styles.amp2}> Happiness</span>
        </h2>
        <p>
          These and many more customizable solutions are available to suit your
          technology needs.
        </p>
      </div>
      <div className={styles.grid}>
        <div>
          <div className={styles.img}>
            <Image
              src={worker}
              alt="card-image"
              fill={true}
              quality={100}
              priority={true}
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.capt}>
            <div className={styles.date}>
              <h2>SMART X</h2>
              <p className={styles.secondp}>Community management system</p>
            </div>
            <p className={styles.detail}>
              An administrative backend to efficiently manage residents, guests
              and all processes within your community.
              {/* need to take charge of your processes */}
            </p>
            <Link href={"/solutions/smartx"}>
              <button>LEARN MORE</button>
            </Link>
          </div>
        </div>
        <div>
          <div className={styles.img}>
            <Image
              src={worker2}
              alt="card-image"
              fill={true}
              quality={100}
              priority={true}
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.capt}>
            <div className={styles.date}>
              <h2>Tracker 360</h2>
              <p className={styles.secondp}>Fleet management system</p>
            </div>
            <p className={styles.detail}>
              A software system to keep track of your vehicles, as well as get
              notified of vehicle maintenance requirements in real time.
            </p>
            <Link href={"/solutions/tracker_360"}>
              <button>LEARN MORE</button>
            </Link>
          </div>
        </div>
        <div>
          <div className={styles.img}>
            <Image
              src={worker3}
              alt="card-image"
              fill={true}
              quality={100}
              priority={true}
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.capt}>
            <div className={styles.date}>
              <h2>Pepnops-EHR</h2>
              <p className={styles.secondp}>
                Electronic Health Recording System
              </p>
            </div>
            <p className={styles.detail}>
              {`Revolutionize patient care with our electronic health recording
              system: intuitive, secure, and fully integrated, ensuring`}
            </p>
            <button style={{ backgroundColor: "gray" }}>COMING SOON</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
