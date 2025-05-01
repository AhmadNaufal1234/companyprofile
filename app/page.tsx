// app/page.tsx
import { Metadata } from "next";
import ClientHome from "./ClientHome";

export const metadata: Metadata = {
  title: "Beranda | TechFusion",
  description: "Landing page resmi TechFusion.",
};

export default function Home() {
  return <ClientHome />;
}
