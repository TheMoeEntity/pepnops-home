import styles from "./index.module.css";
import Image from "next/image";
import pepnops from "../../public/images/pepnops2.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.bars}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className={styles.logo}>
        <Image
          src={pepnops}
          objectFit="cover"
          alt="card-image"
          layout="fill"
          quality={100}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div>
        <ul>
          <li>Products</li>
          <li>Who we are</li>
          <li>{`Let's Talk`}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
