import Navbar from "@/components/Navbar";
import SecNav from "@/components/SecNav";
import Hero from "@/components/Hero";
import Terms from "@/components/Terms";
import VtoSwitch from "@/components/VtoSwitch";
import Activate from "@/components/Activate";

export default function Home() {
  return (
    <main className="h-full w-full overflow-y-hidden bg-slate-500">
      <Activate/>
      <VtoSwitch/>
    </main>
  );
}
