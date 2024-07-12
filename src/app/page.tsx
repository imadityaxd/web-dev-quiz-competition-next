import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { TypewriterEffectSmoothDemo } from "@/components/TypeWriter";
import { ThreeDCardDemo } from "@/components/ui/ThreeDCard";
import { GlobeDemo } from "@/components/ui/WorldGlobe";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <Hero />
        <GlobeDemo />
        <ThreeDCardDemo />
        <TypewriterEffectSmoothDemo />
        <Footer />
      </div>
    </main>
  );
}
