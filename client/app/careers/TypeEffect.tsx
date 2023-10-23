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
          .typeString(
            '<span class="green">Pe</span>o<span class="green">p</span>le'
          )
          .pauseFor(1000)
          .deleteAll()
          .typeString('A<span class="green">n</span>d')
          .pauseFor(1000)
          .deleteAll()
          // .deleteChars(10)
          .typeString(
            '<span class="green">Op</span>inion<span class="green">s</span>'
          )
          .pauseFor(1000)
          .deleteAll()
          .typeString('<span class="green">PEPNOPS.</span>')
          .pauseFor(2500)
          .start();
      }}
    />
  );
};

export default TypeEffect;
