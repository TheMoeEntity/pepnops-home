import styles from "./index.module.css";
import Image from "next/image";
import worker from "../../public/images/topview.jpg";
import worker2 from "../../public/images/motor.jpg";
import worker3 from "../../public/images/watches.jpg";
const Products = () => {
  return (
    <div className={styles.products}>
      <div className={styles.title}>
        <h2>OUR PRODUCTS</h2>
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
              <p>Visitors management system</p>
            </div>
            <p className={styles.detail}>
              Keeping track of guests and visitors within an estate can be a
              problem. Our software solution is all you need to efficiently
              manage your guests
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
              <h2>Tracker</h2>
              <p>Fleet management system</p>
            </div>
            <p className={styles.detail}>
              Keeping track of guests and visitors within an estate can be a
              problem. Our software solution is all you need to efficiently
              manage your guests
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
              <h2>SMART X</h2>
              <p>Visitors management system</p>
            </div>
            <p className={styles.detail}>
              Keeping track of guests and visitors within an estate can be a
              problem. Our software solution is all you need to efficiently
              manage your guests
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Products;
