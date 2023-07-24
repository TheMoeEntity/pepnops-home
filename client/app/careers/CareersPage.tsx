"use client";
import styles from "../../components/index.module.css";
import Image from "next/image";
import innovation from "../../public/images/innovation.png";
import Link from "next/link";

const assets2 = [
  {
    icon: innovation,
    title: "Collaboratio is key!",
    text: "We firmly believe that collaboration leads to the best results. Our team thrives on the collective intelligence and diverse perspectives of our members. By joining us, you will have the opportunity to collaborate with some of the brightest minds in the industry, working together to tackle exciting challenges and deliver outstanding solutions. We foster a culture of open communication, active listening, and mutual respect, ensuring that every voice is heard and valued.",
  },
  {
    icon: innovation,
    title: "Driven by excellence!",
    text: "Excellence is embedded in our DNA. We strive for the highest standards in everything we do, from the quality of our products and services to the user experience of our solutions. Joining our organization means joining a group of dedicated professionals who are passionate about delivering exceptional results. We provide a supportive and challenging environment that encourages continuous learning and growth, enabling you to sharpen your skills and achieve excellence in your work.",
  },
  {
    icon: innovation,
    title: "We love to innovate!",
    text: "innovation is at the heart of everything we do. We believe in pushing boundaries, exploring new technologies, and finding creative solutions to complex problems. Joining our team means you'll be part of a dynamic and forward-thinking organization that encourages and rewards innovation. We provide a supportive environment where you can bring your ideas to life and make a significant impact in the world of software development.",
  },
];

const CareersPage = () => {
  return (
    <div className={styles.careers}>
      <div className={styles.careerHero}>
        <div className={styles.overlay}></div>
        <div className={styles.centered}>
          <h1>People and Opinions</h1>
          <p className={styles.capt4}>
            At Pepnops, we believe that people and their opinions matter. We are
            passionate about creating a collaborative and inclusive work
            environment where {`everyone's`} voice is valued. We understand that
            our success as a company is built upon the unique perspectives and
            contributions of each team member. {`That's`} why we are dedicated
            to fostering an atmosphere that encourages open communication,
            creativity, and growth.
          </p>
        </div>
      </div>
      <div className={styles.why}>
        <h2>Why Join Us?</h2>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          obcaecati nesciunt alias ea perspiciatis asperiores, ipsam tempore et
          eveniet quis molestias iusto nisi est rem cumque quod impedit maxime
          officia odio nemo? Incidunt accusantium maxime, earum quasi ut cumque
          animi?
        </p> */}

        <div className={styles.cards}>
          {assets2.map((x, i) => (
            <div className={styles.cardDiv} key={i}>
              <div className={styles.icons}>
                <Image
                  src={x.icon}
                  alt="card-image"
                  fill={true}
                  quality={100}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h2>
                <strong>{x.title}</strong>
              </h2>
              <div>
                <p style={{ fontSize: "12px" }}>{x.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.call}>
          <h3>See where you fit in</h3>
          <h2>Join our community and Help define it.</h2>
          <p>Ready to join us? Take the bold step today!</p>

          <Link href="/contact" prefetch={false}>
            <button>GET IN TOUCH</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { CareersPage };
