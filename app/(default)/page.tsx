export const metadata = {
  title: "Home - Douglas",
  description: "Page description",
};

import Hero from "@/components/hero";
import Clients from "@/components/clients";
import Features from "@/components/features";
import Features02 from "@/components/features-02";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <Features02 />
    </>
  );
}
