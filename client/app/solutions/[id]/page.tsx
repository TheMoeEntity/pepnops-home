import { Helpers } from "@/helpers";
import dynamic from "next/dynamic";
const Sponsors = dynamic(() => import("./SolutionsPage"), {
  suspense: true,
});
import { redirect } from "next/navigation";

const Solutions = async ({ params }: any) => {
  const data = await Helpers.FetchData(params.id);

  if (!data) {
    redirect("/not-found.tsx");
  }
  return <Sponsors />;
};

export default Solutions;
