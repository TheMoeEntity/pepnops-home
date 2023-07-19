import dynamic from "next/dynamic";
const Sponsors = dynamic(() => import("./SolutionsPage"), {
  suspense: true,
});

const Solutions = () => {
  return <Sponsors />;
};

export default Solutions;
