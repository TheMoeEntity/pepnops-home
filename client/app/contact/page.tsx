import { Metadata } from "next";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("./ContactForm"));
export const metadata: Metadata = {
  title: "Pepnops | contact us",
  description: "PEPNOPS Team. Let's talk, get in touch",
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

const Contact = () => {
  return <ContactForm />;
};

export default Contact;
