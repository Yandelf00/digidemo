import Navbar from "@/components/Navbar";
import SecNav from "@/components/SecNav";
import Hero from "@/components/Hero";
import Terms from "@/components/Terms";
import Vto from "@/components/Vto";
import VtoSwitch from "@/components/VtoSwitch";

export default function Home() {
  return (
    <main className="h-full overflow-y-hidden">
      <Terms/>
      <VtoSwitch/>
      <Navbar/>
      <SecNav/>
      <Hero/>
    </main>
  );
}
