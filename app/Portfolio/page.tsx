// app/page.tsx
import { Metadata } from "next";
import ClientPortfolio from "./ClientPortfolio";

export const metadata: Metadata = {
    title: "Portfolio | OneWeb",
    description: "Landing page resmi OneWeb.",
};

export default function Home() {
    return <ClientPortfolio />;
}
