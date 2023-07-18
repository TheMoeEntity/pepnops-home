import styles from "./index.module.css";
import Image from "next/image";
import worker from "../../public/images/smartx.png";
import worker2 from "../../public/images/motor.jpg";
import worker3 from "../../public/images/IT.jpg";
const Products = () => {
  return (
    <div id="solutions" className={styles.products}>
      <div className={styles.title}>
        <h2>OUR SOLUTIONS</h2>
      </div>
      <div className={styles.grid}>
        <div>
          <div className={styles.img}>
            <Image
              src={worker}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.capt}>
            <div className={styles.date}>
              <h2>SMART X</h2>
              <p className={styles.secondp}>Community management system</p>
            </div>
            <p className={styles.detail}>
              An administrative backend to efficiently manage residents, guests
              and all processes within your community
              {/* need to take charge of your processes */}
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div>
          <div className={styles.img}>
            <Image
              src={worker2}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
            <button>LEARN MORE</button>
          </div>
        </div>
        <div>
          <div className={styles.img}>
            <Image
              src={worker3}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.capt}>
            <div className={styles.date}>
              <h2>IT Consulting</h2>
              <p className={styles.secondp}>
                Software consulting and outsourcing
              </p>
            </div>
            <p className={styles.detail}>
              Professional IT consulting and outsourcing to help drive growth,
              enhance efficiency, and unlock your full business potential.
              {/* Discover ways to partner with us for professional expertise andn
              accelerated growth. */}
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
