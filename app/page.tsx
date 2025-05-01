// app/page.tsx
import { Metadata } from "next";
import ClientHome from "./ClientHome";

export const metadata: Metadata = {
  title: "Beranda | FallDeveloper",
  description: "Landing page resmi Ahmad Naufal.",
};

export default function Home() {
  return <ClientHome />;
}
