import Image from "next/image";
import styles from "./index.module.css";
import bus from "../../public/images/pepbus.png";

const TrackerPage = () => {
  return (
    <div className={styles.tracker}>
      <div className={styles.hero}>
        <div className={styles.trackerText}>
          <h3>Tracker 360</h3>
          <h1>
            Real-time monitoring system for your <span>vehicles</span> and
            <span> drivers</span>.
          </h1>
        </div>
      </div>
      <div className={styles.analyze}>
        <div>
          <h3>
            Track, Analyze, and Optimize <span>Every</span> Journey.
          </h3>
          <p>
            Whether {`you're`} a logistics company, a transport provider, or a
            business managing a vast fleet, every journey matters. Our fleet
            management system offers real-time tracking capabilities, ensuring
            you have a {`bird's`} eye view of each {`vehicle's`} location.
          </p>
        </div>
        <div>
          <Image
            src={bus}
            alt="Bus"
            fill={true}
            quality={100}
            priority={true}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default TrackerPage;
