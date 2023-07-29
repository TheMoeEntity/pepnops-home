import { StaticImageData } from "next/image";
import reporting from "./../public/images/reporting.png";
import sos from "./../public/images/sos.png";
import payment from "./../public/images/payment.png";
import push from "./../public/images/push.png";
import guide from "./../public/images/guide.png";
import manage from "./../public/images/manage.png";
import innovation from "./../public/images/innovation2.png";
import excellence2 from "./../public/images/innovation.png";
import collaboration from "./../public/images/collaboration.png";
import excellence from "./../public/images/excellence.png";
import collaborate from "./../public/images/collaborate.png";
import innovate from "./../public/images/innovate.png";
export type replacements = {
  name: string;
  message: string;
  phone: string;
  budget: string;
  choice: string;
  email: string;
  greeting?: string;
};
export type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export type fetchdata = {
  title: string;
  capt1: string;
  capt2: string;
  showPhone: boolean;
  callToAction: string;
  KeyFeatures: {
    title: string;
    features: { title: string; icon: string; text: string }[];
  };
};
export const assets10 = [
  {
    icon: manage,
    title: "MANAGE VISITORS",
    text: "This feature allows resident to create instant and scheduled visits for their guests. Residents can also set the duration for one-off and recurring visits.",
  },
  {
    icon: guide,
    title: "COMMUNITY GUIDE",
    text: "Residents can explore notable locations in the community. This features helps new residents easily locate places within the community.",
  },
  {
    icon: reporting,
    title: "REPORTING",
    text: "Easily access the records for previous visits and that of guests withing your estate, offices, service apartments, etc at every point in time.",
  },
  {
    icon: sos,
    title: "SOS",
    text: "Residents can easily report an emergency and get help just by the Click of a button.",
  },
  {
    icon: payment,
    title: "PAYMENT",
    text: "Easily automate the collection of payments. Our Smart X solution also helps with proper invoicing and bookkeeping.",
  },
  {
    icon: push,
    title: "PUSH NOTIFICATIONS",
    text: `Share information with residents as clickable pop-up messages on their devices. That way residents don't get to miss out on vital information.`,
  },
];
export const assets8: { icon: StaticImageData; title: string; text: string }[] =
  [
    {
      icon: innovate,
      title: "We love to innovate!",
      text: "innovation is at the heart of everything we do. We believe in pushing boundaries, exploring new technologies, and finding creative solutions to complex problems. Joining our team means you'll be part of a dynamic and forward-thinking organization that encourages and rewards innovation. We provide a supportive environment where you can bring your ideas to life and make a significant impact in the world of software development.",
    },
    {
      icon: collaborate,
      title: "Collaboration is key!",
      text: "We firmly believe that collaboration leads to the best results. Our team thrives on the collective intelligence and diverse perspectives of our members. By joining us, you will have the opportunity to collaborate with some of the brightest minds in the industry, working together to tackle exciting challenges and deliver outstanding solutions. We foster a culture of open communication, active listening, and mutual respect, ensuring that every voice is heard and valued.",
    },
    {
      icon: excellence,
      title: "Driven by excellence!",
      text: "Excellence is embedded in our DNA. We strive for the highest standards in everything we do, from the quality of our products and services to the user experience of our solutions. Joining our organization means joining a group of dedicated professionals who are passionate about delivering exceptional results. We provide a supportive and challenging environment that encourages continuous learning and growth, enabling you to sharpen your skills and achieve excellence in your work.",
    },
  ];
export const assets2: {
  icon: StaticImageData;
  title: string;
  text: string;
}[] = [
  {
    icon: innovation,
    title: "INNOVATION",
    text: "We are a forward thinking company driven by a passion for innovation. We pride ourselves on offering creative and advanced solutions to enable organizations stay ahead of the curve.",
  },
  {
    icon: collaboration,
    title: "COLLABORATION",
    text: "We believe in forging strong partnerships with our clients. Our collaborative process ensures that your insight and feeble are actively incooperated throughout the project.",
  },
  {
    icon: excellence2,
    title: "EXCELLENCE",
    text: "Our unwavering dedication to excellence shines through every of our projects. We ensure that every solution we provide is of the highest industry standard and aligns with client's vision.",
  },
];
export const ServicesAssets: {
  text: string;
  title: string;
  icon: StaticImageData;
}[] = [
  {
    icon: reporting,
    title: "SOFTWARE ASSESSMENT",
    text: "We offer cutting-edge software analysis which involves identifying architectural gaps within your existing software systems, and proposing scalable, maintainable, and efficient technological solutions that align with the long-term objectives.",
  },
  {
    icon: sos,
    title: "SOFTWARE DEVELOPMENT",
    text: "Our expert team partners with businesses to deliver customized software solutions that drive innovation, efficiency, and growth. Our software development consulting services encompass a wide range of expertise. From initial project planning and requirement gathering to design, coding, testing, and deployment, we provide comprehensive consulting services throughout the software development lifecycle.",
  },
  {
    icon: payment,
    title: "WHITE-LABEL SERVICE",
    text: "We work with clients to design and develop end-to-end products that are ready for sale and execution. Our white-label software development service covers a wide range of industries and domains and is also open to businesses seeking to deploy some of our solutions as a third party. T&C Apply.",
  },
  {
    icon: push,
    title: "SYSTEM INTEGRATION",
    text: `We facilitate the integration of different software systems, databases, and APIs to optimize workflows, improve efficiency, and enhance collaboration for businesses. We understand the importance of data security and privacy. We adhere to industry standards and best practices to safeguard your sensitive information and comply with regulatory requirements`,
  },
  {
    icon: push,
    title: "UI/UX DESIGN",
    text: `We provide expertise in designing visually appealing and user-friendly interfaces to enhance user experience. Whether it's web, mobile, or desktop applications, we ensure that your digital product provides a consistent and optimized experience across all devices, enhancing user satisfaction and engagement. We also create wireframes, prototypes, and design systems that align with branding guidelines and best practices.`,
  },

  {
    icon: push,
    title: "PERFORMANCE OPTIMIZATION",
    text: `We provide software optimization services aimed at enhancing software performance. We offer code optimization, database querying, and server configuration for optimal software performance and smooth user experience.`,
  },
  {
    icon: push,
    title: "SYSTEM MODERNIZATION",
    text: `We help businesses modernize and upgrade their outdated software systems. Our Legacy modernization service ranges across software reengineering, re-platforming, or building of new systems based on business requirements. We also facilitate data migration, integration with modern technologies, and knowledge transfer to go with the improvements.`,
  },
  {
    icon: push,
    title: "MOBILE DEVELOPMENT",
    text: `We offer top-tier mobile app development services for established companies and startups. From conceptualizing your app idea to launching it on the App Store and Google Play Store, we guide you through every step of the mobile app development process. We also take into account important aspects like scalability, security, and performance to deliver a top-notch mobile solution that not only meets your current needs but also accommodates future growth.`,
  },
  {
    icon: push,
    title: "WEB DEVELOPMENT",
    text: `We specialize in creating visually stunning, user-friendly, and highly functional websites. Whether you need a simple informational website, a sophisticated e-commerce platform, or a complex web application, we have the skillset and experience to deliver outstanding results. Our holistic approach to web design also ensures that your website is responsive and adapts perfectly across different devices and screen sizes, and is search engine optimized to attract organic traffic and rank well on search engine results`,
  },
];
export class Helpers {
  static isBrowser = () => typeof window !== "undefined";
  static setGreeting = (): string => {
    const hour = new Date().getHours();

    let timeCheck =
      hour < 12
        ? "Good Morning"
        : hour < 18
        ? "Good Afternoon"
        : "Good Evening";

    return timeCheck;
  };
  static FetchData = async (id: string) => {
    switch (id) {
      case "smartx":
        return {
          title: "Smart X",
          capt1:
            "Efficiently manage your processes and keep track of visitors within your community",
          capt2:
            "The centralised community management system. Customizable to cater for your specific needs.",
          showPhone: true,
          callToAction:
            "These and many more customizable features are available to suit your community management needs.",
          KeyFeatures: {
            title:
              "Our Smart X solution provides an effective and efficient way to manage your community administrative processes and keep track of guests.",
            features: [
              {
                icon: "manage",
                title: "MANAGE VISITORS",
                text: "This feature allows resident to create instant and scheduled visits for their guests. Residents can also set the duration for one-off and recurring visits.",
              },
              {
                icon: "guide",
                title: "ESTATE GUIDE",
                text: "Residents can explore notable locations in the estate. This features helps new residents easily locate places within the estate.",
              },
              {
                icon: "reporting",
                title: "REPORTING",
                text: "Easily access the records for previous visits and that of guests withing the estate at every point in time.",
              },
              {
                icon: "sos",
                title: "SOS",
                text: "Residents can easily report an emergency and get help just by the Click of a button.",
              },
              {
                icon: "payment",
                title: "PAYMENT",
                text: "Easily collect all estate payments within our platform. Our Smart X helps with proper invoicing and bookkeeping.",
              },
              {
                icon: "push",
                title: "PUSH NOTIFICATIONS",
                text: `The Estate would share information with residents as clickable pop-up messages on their devices. That way residents don't get to miss out on vital information.`,
              },
            ],
          },
        };

      case "tracker_360":
        return {
          title: "Tracker 360",
          capt1: "Real time monitoring system for your vehicles and drivers",
          capt2:
            "Accurately track your fleet and obtain detailed information on vehicle and driver performance.",
          showPhone: false,
          callToAction:
            "These and many more customizable features are available to suit your fleet management needs.",
          KeyFeatures: {
            title:
              "Tracker 360 is a centralized system to efficiently monitor your driver & fleets operations. Get important real time information on vehicle location and performance.",
            features: [
              {
                icon: "manage",
                title: "GPS TRACKING",
                text: "Our integrated GPS tracking device allows you to keep track of where your fleet is in real-time. You also get information on distance travelled, speed, route, and trips completed.",
              },
              {
                icon: "guide",
                title: "GEO FENCING",
                text: "Set up boundaries around specific areas and get alerted when either of your fleets enters or exits the geo-fenced area. The software also alerts the driver.",
              },
              {
                icon: "reporting",
                title: "REPORTING",
                text: "Get up-to date information on vehichle maintenance requirements automatically via SMS or Email. Evaluate drivers' performance and access data of vehicles over time for effective decision making.",
              },
              {
                icon: "sos",
                title: "SCHEDULING",
                text: "Never lose track of important trips and maintenance requirements. Schedule and automate trips and vehicles maintenance, and get alerted for upcoming maintenance needs to save time and cost.",
              },
              {
                icon: "payment",
                title: "SAFETY & COMPLIANCE",
                text: "Monitor drivers' behaviour, track driving hours and violations, and receives alerts when a driver exceeds speed limit or engages in unsafe driving practices.",
              },
              {
                icon: "push",
                title: "THEFT PROTECTION",
                text: `This feature protects your fleet from unauthorized access and usage. Remotely immobilize your fleet preventing it from moving in case of theft and get GPS information for vehicle recovery.`,
              },
            ],
          },
        };

      default:
        return undefined;
    }
  };
}
