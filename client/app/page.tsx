import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import styles from "./page.module.css";
const Burden = dynamic(() => import("@/components/Burden"), {
  suspense: true,
});
const Products = dynamic(() => import("@/components/Products"), {
  suspense: true,
  ssr: false,
});
const Sponsors = dynamic(() => import("@/components/Sponsors"), {
  suspense: true,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Products />
      <Burden />
      <Sponsors />
    </main>
  );
}
