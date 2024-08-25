import { Metadata } from "next";
import { HomeSection } from "./components/home-section";

export const metadata: Metadata = {
  title: "Andra Airlines",
};

export default function Home() {
  return (
    <main>
      <HomeSection />
    </main>
  );
}
