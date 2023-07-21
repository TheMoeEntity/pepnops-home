import Image from "next/image";
import styles from "../../components/index.module.css";
import man from "../../public/images/group-9.jpeg";
import mac from "../../public/images/off.jpg";
import shake from "../../public/images/twoshake.jpg";
import goals from "../../public/images/goals.png";

const page = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutHero}>
        <div className={styles.centered}>
          <h1>
            Innovation<span>. </span>Collaboration<span>. </span>Excellence
            <span>. </span>
          </h1>
        </div>
        <Image
          src={man}
          alt="hero-image"
          fill={true}
          quality={100}
          priority={true}
          sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
        />
      </div>
      <div className={styles.aboutSection}>
        <div>
          <h2>Hi,{` we're `}PEPNOPS Inc.</h2>
          <p>
            Pepnops Inc. is a leading IT solutions company committed to
            delivering innovative and customized technology solutions across
            different industries. Our expert team of developers and engineers
            are dedicated to providing cutting-edge solutions that are tailored
            to meet the unique needs of your business. <br /> <br /> We are
            committed to delivering solutions that are reliable, and tailored to
            consistently exceed clients expectations, engineers and IT
            professionals has a proven track record of delivering top-notch
            software development, web and mobile application development, data
            management, IT consulting, and digital marketing services to clients
            across the globe.
          </p>
        </div>
        <div>
          <Image
            src={mac}
            alt="hero-image"
            fill={true}
            quality={100}
            priority={true}
            sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className={styles.aboutSection2}>
        <div>
          <Image
            src={shake}
            alt="hero-image"
            fill={true}
            quality={100}
            priority={true}
            sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
          />
        </div>
        <div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to prvide innovative and comprehensive technology
            solutions across multiple industries through a collaborative and
            client-focused approach. <br /> <br /> We strive to be the most
            trusted and reliable IT solutions provider in the industry committed
            to delivering superior quality services and building long-term
            relationships, based on mutual trust and respect, while exceeding
            our {`client's`} expectations in every step of the way.
          </p>
        </div>
      </div>

      <div className={styles.aboutSection}>
        <div>
          <h2>Our Goals</h2>
          <p>
            At pepnops Inc. our goal is to be the go-to IT solutions provider
            for clients in a variety of industries. <br /> <br /> We strive to
            continually provide innovative and customized solutions to meet the
            unique needs of each unique client, by investing in the latest
            technologies, recruiting and retaining the best talents, and staying
            current with the latest trends and best practices in the industry.
          </p>
        </div>
        <div>
          <Image
            src={goals}
            alt="hero-image"
            fill={true}
            quality={100}
            priority={true}
            sizes="(max-width: 711px) 100vw, (max-width: 711px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
