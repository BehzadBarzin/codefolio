import About from "@/components/About";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/constants";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />

        {/* TEMP: Simple Long Section to see nav */}
        <div className="w-full h-[500vh]"></div>
      </div>
    </main>
  );
}
