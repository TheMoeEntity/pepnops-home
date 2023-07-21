import dynamic from "next/dynamic";

const AboutPage = dynamic(() => import("./AboutPage"), {
  suspense: true,
});

const About = () => {
  return <AboutPage />;
};

export default About;
