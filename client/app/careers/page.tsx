import { Metadata } from "next";
import { CareersPage } from "./CareersPage";

export const metadata: Metadata = {
  title: "Join our community | Pepnops",
  description: "PEPNOPS Team. Careers at PEPNOPS",
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

const Careers = () => {
  return <CareersPage />;
};

export default Careers;
