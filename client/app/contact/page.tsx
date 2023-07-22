import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("./ContactForm"));

const Contact = () => {
  return <ContactForm />;
};

export default Contact;
