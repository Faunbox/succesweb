import Hero from "@/components/home/Hero";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export default function Home() {
  const About = dynamic(() => import("@/components/home/About"));
  const Services = dynamic(() => import("@/components/home/Services"));
  const ContactComponent = dynamic(
    () => import("@/components/home/ContactComponent")
  );

  return (
    <main className="w-screen overflow-x-hidden">
      <Hero />
      <Suspense fallback={<p>Ładowanie.....</p>}>
        <Services />
        <ContactComponent />
        <About />
      </Suspense>
    </main>
  );
}
