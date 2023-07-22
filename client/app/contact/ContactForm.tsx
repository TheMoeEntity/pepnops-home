import styles from "../../components/index.module.css";

const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <div className={styles.itHero}>
        <div className={styles.centered}>
          <h1>
            Innovation<span>. </span>Collaboration<span>. </span>Excellence
            <span>. </span>
          </h1>
          <h1 className={styles.capt3}>
            In {`today's`} rapidly evolving technological landscape, companies,
            including startups, are faced with constant advancements and
            innovations that can significantly impact their operations.
          </h1>
        </div>
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default ContactForm;
