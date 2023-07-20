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
export class Helpers {
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
              "Our Smart X solution provides an effective and efficient way to manage your community administrative processes and keep track of guests",
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
