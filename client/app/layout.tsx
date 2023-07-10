import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Layout from "@/components/layout";
const inter = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "PEPNOPS TEAM | Home",
  description: "PEPNOPS Official homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
      <Layout>
          {children}
      </Layout>
        </body>
    </html>
  );
}
