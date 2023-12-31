import Typewriter from "typewriter-effect";
import styles from "../../components/index.module.css";

const TypeEffect = () => {
  return (
    <Typewriter
      // options={{
      //   strings: ["People", "And", "Opinions.", "PEPNOPS"],
      //   autoStart: true,
      //   loop: true,
      //   cursorClassName: classname,
      //   deleteSpeed: 70,
      // }}
      options={{
        loop: true,
      }}
      onInit={(writer) => {
        writer
          .pauseFor(2500)
          .typeString("Lives.")
          .pauseFor(2000)
          .deleteAll()
          .typeString("Businesses.")
          .pauseFor(2000)
          .deleteAll()
          // .deleteChars(10)
          .typeString("Operations.")
          .pauseFor(2000)
          .deleteAll()
          .start();
      }}
    />
  );
};

export default TypeEffect;
