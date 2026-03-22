import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Stats from "./components/Stats";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2f7f3] text-slate-900">
      <Navbar />

      <main>
        <div className="w-full px-6 pt-7 lg:px-8">
          <Hero />
        </div>
        <WhyChoose />
        <Stats />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}
