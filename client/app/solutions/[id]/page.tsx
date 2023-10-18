import { Helpers } from "@/helpers";
import { Metadata, ResolvingMetadata } from "next";
import dynamic from "next/dynamic";
import { Props } from "@/helpers";
const Sponsors = dynamic(() => import("./SolutionsPage"), {
  suspense: true,
});
import { redirect } from "next/navigation";
import TrackerPage from "@/components/TrackerPage";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const product = await Helpers.FetchData(id);

  return {
    title: product?.title + " | Community management software",
    description: "PEPNOPS Team. Our software solutions",
  };
}

const Solutions = async ({ params }: any) => {
  const data = await Helpers.FetchData(params.id);

  if (!data) {
    redirect("/not-found.tsx");
  }
  // return <Sponsors data={data} />;
  return <TrackerPage />;
};

export default Solutions;
