import styles from "../../components/index.module.css";

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
    </div>
  );
};

export { CareersPage };
