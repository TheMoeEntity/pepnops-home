import { Metadata } from "next";
import dynamic from "next/dynamic";

const Consulting = dynamic(() => import("./Consulting"), {
  suspense: true,
});

export const metadata: Metadata = {
  title: "PEPNOPS TEAM | IT Consulting solutions",
  description: "PEPNOPS IT Consulting and services we offer",
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

const IT_consulting = () => {
  return <Consulting />;
};

export default IT_consulting;
