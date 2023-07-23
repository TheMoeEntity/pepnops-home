import { Helpers } from "@/helpers";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const Sponsors = dynamic(() => import("./SolutionsPage"), {
  suspense: true,
});
import { redirect, useParams } from "next/navigation";

export const metadata: Metadata = {
  title: "PEPNOPS TEAM | Solutions",
  description: "PEPNOPS Team. Our solutions",
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

const Solutions = async ({ params }: any) => {
  const data = await Helpers.FetchData(params.id);

  if (!data) {
    redirect("/not-found.tsx");
  }
  return <Sponsors data={data} />;
};

export default Solutions;
