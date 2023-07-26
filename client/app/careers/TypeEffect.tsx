import Typewriter from "typewriter-effect";
import styles from "../../components/index.module.css";

const TypeEffect = () => {
  const classname = styles.typeStyles;
  return (
    <Typewriter
      options={{
        strings: ["People", "And", "Opinions."],
        autoStart: true,
        loop: true,
        cursorClassName: classname,
        deleteSpeed: 70,
      }}
    />
  );
};

export default TypeEffect;
