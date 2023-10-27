import Image from "next/image";
import styles from "./index.module.css";
import bus from "../../public/images/pepbus.png";
import trackerman from "../../public/images/tracker3.png";
import Link from "next/link";

const TrackerPage = () => {
  return (
    <div className={styles.tracker}>
      <div className={styles.hero}>
        <div>
          <Image
            src={trackerman}
            alt="tracker guy"
            fill={true}
            quality={100}
            priority={true}
            objectFit={"contain"}
            sizes="(max-width: 1080px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
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
      <div className={styles.features}>
        <table id="customers">
          <thead>
            <tr>
              <th></th>
              <th>Key Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>GPS TRACKING</b>
              </td>
              <td>
                This feature offers residents a seamless way to schedule
                immediate or future guest visits, whether {`they're`} one-time
                or recurring, ensuring effortless community coordination and
                convenience.
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>GEO FENCING</b>
              </td>
              <td>
                Set up boundaries around specific areas and get alerted when
                either of your fleets enters or exits the geo-fenced area. The
                software also alerts the driver.
              </td>
            </tr>
            <tr>
              <td>
                <b>REPORTING</b>
              </td>
              <td>
                Get up-to date information on vehichle maintenance requirements
                automatically via SMS or Email. Evaluate {`drivers'`}{" "}
                performance and access data of vehicles over time for effective
                decision making.
              </td>
            </tr>
            <tr>
              <td>
                <b>SCHEDULING</b>
              </td>
              <td>
                Never lose track of important trips and maintenance
                requirements. Schedule and automate trips and vehicles
                maintenance, and get alerted for upcoming maintenance needs to
                save time and cost.
              </td>
            </tr>
            <tr>
              <td>
                <b>SAFETY & COMPLIANCE</b>
              </td>
              <td>
                Monitor {`drivers'`} behaviour, track driving hours and
                violations, and receives alerts when a driver exceeds speed
                limit or engages in unsafe driving practices.
              </td>
            </tr>
            <tr>
              <td>
                <b>THEFT PROTECTION</b>
              </td>
              <td>
                This feature protects your fleet from unauthorized access and
                usage. Remotely immobilize your fleet preventing it from moving
                in case of theft and get GPS information for vehicle recovery.
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
        </table>
        <p>
          Our solution empowers businesses to drive efficiency, bolster trust,
          and realize significant cost savings, all while contributing to a
          streamline and elevated fleet operations. <br /> <br />
          <span>
            <b>Ready to dive into safer and smoother operations?</b>
          </span>
        </p>
        <div className={styles.talk}>
          <Link href={"/contact"}>
            <button>Talk to us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrackerPage;
