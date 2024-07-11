import Hero from "@/components/Hero";
import { GlobeDemo } from "@/components/ui/WorldGlobe";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <Hero />
        <GlobeDemo />
      </div>
    </main>
  );
}
