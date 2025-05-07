// app/page.tsx
import { Metadata } from "next";
import ClientKontak from "./ClientKontak";

export const metadata: Metadata = {
    title: "Kontak | OneWeb",
    description: "Landing page resmi OneWeb.",
};

export default function Home() {
    return <ClientKontak />;
}
