import { Metadata } from "next";
import dynamic from "next/dynamic";

const AboutPage = dynamic(() => import("./AboutPage"), {
  suspense: true,
});
export const metadata: Metadata = {
  title: "PEPNOPS TEAM | Who we are",
  description: "PEPNOPS about page. Meet the team",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ],
};

const About = () => {
  return <AboutPage />;
};

export default About;
