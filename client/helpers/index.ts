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
import moe from "./../public/images/moe2.jpeg";
import clever from "./../public/images/mr clever.jpeg";
import alfred from "./../public/images/moe.jpeg";
import innovate from "./../public/images/innovate.png";
import React, {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  ReactFragment,
} from "react";
import vision from "./../public/images/vision 2 execute.png";
import processAuto from "./../public/images/process auto.png";
import axios from "axios";
export type replacements = {
  name: string;
  message: string;
  phone: string;
  budget: string;
  choice: string;
  email: string;
  greeting?: string;
};
export interface thoughts {
  text: string;
  image: StaticImageData;
}
export type careerType = {
  title: string;
  text: string;
};
export type teamType = {
  title: string;
  profile: string;
  image: StaticImageData;
};
export const team: teamType[] = [
  {
    title: "Bright Eguasa",
    profile: "Founder & Chief Product Officer",
    image: clever,
  },
  {
    title: "Moses Nwigberi",
    profile: "Frontend Engineer",
    image: moe,
  },
  {
    title: "Alfred Emmanuel",
    profile: "Frontend Engineer",
    image: moe,
  },
];
export const careerCards: careerType[] = [
  {
    title: "Professional Development Opportunities",
    text: "Your growth is our success. We provide ample opportunities for training, workshops, and courses to enhance your skills and elevate your career.",
  },
  {
    title: "Flexible Work Arrangements",
    text: "We understand the need for work-life balance. Benefit from flexible hours and remote working options tailored to meet your lifestyle.",
  },
  {
    title: "Collaborative Workspace",
    text: "Creativity thrives in collaboration. Our workspace is designed to foster teamwork, inspiration, and innovation every day",
  },
  {
    title: "Health and Wellness Programs",
    text: "Your well-being is paramount. Our comprehensive health and wellness initiatives ensure you stay at the peak of physical and mental health.",
  },
  {
    title: "Tech Allowances",
    text: "We provide stipends or allowances for the latest tech gadgets or essential software, ensuring your workspace remains cutting-edge.",
  },
  {
    title: "Employee Recognition Programs",
    text: "We regularly recognize outstanding performance, innovative ideas, and sustained dedication, ensuring that excellence never goes unnoticed.",
  },
  {
    title: "Volunteer Days",
    text: "We encourage community involvement, providing paid volunteer days to let you make a difference in the ways that matter to you.",
  },
  {
    title: "Employee Assistance Programs",
    text: "Your well-being, our priority. Whether you face personal or professional challenges, our counseling and support services are here to guide and assist.",
  },
  {
    title: "Continuous Learning Credits",
    text: "We offer financial support for external courses, seminars, and certifications, ensuring you stay at the forefront of your field.",
  },
];
export const thoughtsGrid: thoughts[] = [
  {
    text: "From Vision to Execution: How We Turn Software Ideas into Reality",
    image: vision,
  },
  {
    text: "The complete guide to process automation and why you need it.",
    image: processAuto,
  },
  {
    text: "The complete guide to process automation and why you need it.",
    image: vision,
  },
  {
    text: "The complete guide to process automation and why you need it.",
    image: vision,
  },
  {
    text: "The complete guide to process automation and why you need it.",
    image: vision,
  },
];
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
    icon: sos,
    title: "SOFTWARE DEVELOPMENT",
    text: "Our dedicated team collaborates with businesses to craft bespoke software solutions that foster innovation, efficiency, and growth. We offer a holistic approach to software development, guiding you from initial planning and requirement analysis to design, coding, testing, and deployment. With us, the journey of software development becomes a seamless experience, ensuring you can focus on growth without any hindrances.",
  },
  {
    icon: payment,
    title: "WHITE-LABEL SERVICE",
    text: "We collaborate with clients to craft ready-to-launch products tailored to their needs. Our white-label software development caters to diverse industries and domains. Businesses looking to deploy our solutions as third parties will find a smooth transition in line with our ethos of making processes simple and efficient. T&C Apply.",
  },
  {
    icon: push,
    title: "SYSTEM INTEGRATION",
    text: `We seamlessly integrate various software systems, databases, and APIs, streamlining workflows and bolstering efficiency and collaboration for businesses. Recognizing the paramount importance of data security and privacy, we uphold industry benchmarks, ensuring your sensitive information is protected and regulatory mandates are met with ease.`,
  },
  {
    icon: push,
    title: "UI/UX DESIGN",
    text: `We specialize in crafting visually stunning and intuitive interfaces to elevate user experiences. From web and mobile to desktop applications, we ensure a unified and smooth experience on every device. Dive into our design process, from wireframes and prototypes to systems that stay true to branding guidelines and industry standards, ensuring effortless interactions and heightened user engagement.`,
  },

  {
    icon: push,
    title: "PERFORMANCE OPTIMIZATION",
    text: `We specialize in software optimization, focusing on elevating its performance. Our services encompass code refinement, efficient database queries, and precise server configurations, all aimed at ensuring a fluid and enhanced user experience.`,
  },
  {
    icon: push,
    title: "SYSTEM MODERNIZATION",
    text: `We assist businesses in transitioning from outdated software systems to modern solutions. Our legacy modernization covers software reengineering, re-platforming, or creating new systems tailored to business needs. Additionally, we handle data migration, integrate the latest technologies, and ensure a smooth knowledge transfer accompanying the upgrades.`,
  },
];
export class Helpers {
  static isBrowser = () => typeof window !== "undefined";
  static formatBytes(bytes: number, decimals = 2) {
    if (!+bytes) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }
  static toBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  static resizeTextArea = (
    textAreaRef: React.MutableRefObject<HTMLTextAreaElement | null>
  ) => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  };
  static handleFileSelected = async (
    e: ChangeEvent<HTMLInputElement>,
    enqueueSnackbar: any,
    setSize: any,
    setUserFile: any,
    setCurrFile: any,
    size: string
  ) => {
    const files = (e.target as HTMLInputElement).files;

    if (!files) return;
    const fileType = files[0].type;
    console.log(fileType);
    const acceptedFileTypes: string[] = [
      "application/pdf",
      "image/png",
      "image/jpeg",
      "image/png",
    ];
    if (!acceptedFileTypes.includes(fileType)) {
      enqueueSnackbar(
        "File type not supported. Kindly upload a valid pdf, jpeg or jpg",
        {
          variant: "error",
        }
      );
      return;
    }

    const sizes = parseFloat(String(files[0].size / (1024 * 1024))).toFixed(2);
    console.log(sizes);
    setSize(Helpers.formatBytes(files[0].size));
    setCurrFile(files[0].name + `, ${size}`);
    if (Number(sizes) > 2) {
      enqueueSnackbar("Max file size is 2MB", {
        variant: "error",
      });
      return;
    }

    setUserFile(files[0]);
  };
  static handleSubmit = async (
    setStatus: any,
    setUserFile: any,
    setVal: any,
    setCurrFile: any,
    policyRef: React.MutableRefObject<HTMLInputElement | null>,
    currFile: string,
    val: string,
    e: FormEvent<HTMLFormElement>,
    userFile: File | null,
    enqueueSnackbar: any
  ) => {
    e.preventDefault();
    let results: any;
    if (userFile) {
      try {
        results = await this.toBase64(userFile);
      } catch (error) {
        enqueueSnackbar("There was an error parsing file: " + error, {
          variant: "error",
        });
        return;
      }
    }
    const data = {
      fullName: (
        e.target[
          0 as unknown as keyof typeof e.target
        ] as unknown as HTMLInputElement
      ).value,
      email: (
        e.target[
          1 as unknown as keyof typeof e.target
        ] as unknown as HTMLInputElement
      ).value,
      phone: (
        e.target[
          2 as unknown as keyof typeof e.target
        ] as unknown as HTMLInputElement
      ).value,
      choise: (
        e.target[
          3 as unknown as keyof typeof e.target
        ] as unknown as HTMLInputElement
      ).value,
      budget: (
        e.target[
          4 as unknown as keyof typeof e.target
        ] as unknown as HTMLInputElement
      ).value,
      message: val,
      file: results,
      filename: userFile?.name,
    };

    if (data.fullName.trim() === "") {
      enqueueSnackbar("Full name cannot be empty", {
        variant: "error",
      });
      return;
    } else if (data.budget == "--Choose--" || data.choise == "--Choose--") {
      enqueueSnackbar("Select a valid service or industry", {
        variant: "error",
      });
      return;
    } else if (data.phone === "") {
      enqueueSnackbar("Specify a phone number we can reach you with", {
        variant: "error",
      });
      return;
    } else if (
      val === "" ||
      data.message.trim() === "" ||
      data.message.length < 10
    ) {
      enqueueSnackbar("Message cannot be empty or short", {
        variant: "error",
      });
      return;
    } else if (currFile === "No file selected*" || !userFile) {
      enqueueSnackbar("Please upload a valid document!", {
        variant: "error",
      });
      return;
    }

    if (policyRef.current) {
      if (!policyRef.current.checked) {
        enqueueSnackbar(
          `You are to agree to pepnops' privacy policy
          and non disclosure agreement.  `,
          {
            variant: "error",
          }
        );
        return;
      }
    }
    setStatus("Sending....");
    try {
      const url = "/api/contact";
      const res = await axios.post(url, data);

      res.status === 200 &&
        enqueueSnackbar("Message successfully sent", {
          variant: "success",
        });
      console.log(res.status);
      console.log(res);
      setStatus("Sent successfully");
      setTimeout(() => {
        const resetForm = e.target as HTMLFormElement;
        resetForm.reset();
        setUserFile(null);
        setCurrFile("No file selected*");
        setVal("");
      }, 3000);
    } catch (error) {
      setStatus("...Error sending message");
      enqueueSnackbar(
        "There was an error sending message, try again: " + error,
        {
          variant: "error",
        }
      );
      console.log(error);
    }
    setStatus("Submit");
  };
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
            "Take charge of your community administrative processes and maintain a keen oversight of guest movements with our Smart X solution.",
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
  static showMore = (e: MouseEvent<HTMLLIElement>) => {
    const event = e.target as HTMLElement;
    const elemHeight = (event.nextSibling as HTMLElement).scrollHeight + 180;
    const nextSibling = event.nextSibling as HTMLElement;
    const height = (event.nextSibling as HTMLElement).style.maxHeight;

    (nextSibling as HTMLElement).style.maxHeight =
      height === "" || height === "0px" ? `${elemHeight}px` : "0";
    (event.nextSibling as HTMLElement).style.padding =
      height === "" || height === "0px" ? "10px 30px" : "0 30px";
  };
  static showDetails = (e: MouseEvent<HTMLDivElement>) => {
    const event = e.target as HTMLElement;
    const parent = event.parentElement;
    const height = (event.nextSibling as HTMLElement).style.maxHeight;
    const elemHeight = (event.nextSibling as HTMLElement).scrollHeight + 80;
    if (parent) {
      for (let i = 0; i < parent.children.length; i++) {
        const element = parent.children[i] as HTMLElement;
        if (i == 0) {
          continue;
        }
        if (i % 2 == 0) {
          element.style.background = "black";
          element.style.padding = "0 30px";
          element.style.background = "white";
          element.style.maxHeight = "0";
        } else {
          element.style.background = "black";
        }
      }
    }
    event.style.background =
      height === "" || height === "0px" ? "#00d169" : "black";
    (event.nextSibling as HTMLElement).style.padding =
      height === "" || height === "0px" ? "16px 30px" : "0 30px";
    (event.nextSibling as HTMLElement).style.background =
      height === "1300px" || height === "0px" ? "#e8e8e8" : "#e8e8e8";
    (event.nextSibling as HTMLElement).style.maxHeight =
      height === "" || height === "0px" ? `${elemHeight}px` : "0";
  };
}
