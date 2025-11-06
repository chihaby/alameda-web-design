// app/about/page.tsx (server by default)
import type { Metadata } from "next";
import Services from "./AboutServices";

export const metadata: Metadata = {
  title: "View our services - Alameda Web Design",
  alternates: {
    canonical: "https://alamedawebdesign.net/services",
  },
};

export default function AboutContact() {
  return <Services />;
}
