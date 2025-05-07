// app/page.tsx
import { Metadata } from "next";
import ClientHome from "./ClientHome";

export const metadata: Metadata = {
  title: "Beranda | OneWeb",
  description: "Landing page resmi OneWeb.",
};

export default function Home() {
  return <ClientHome />;
}
