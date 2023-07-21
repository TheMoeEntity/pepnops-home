import dynamic from "next/dynamic";

const Consulting = dynamic(() => import("./Consulting"), {
  suspense: true,
});

const IT_consulting = () => {
  return <Consulting />;
};

export default IT_consulting;
