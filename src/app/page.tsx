import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";


export default function Home() {
  return (
    <div className="text-[white] selection:bg-[#A9927D] selection:text-black">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
     
      <Services/>
      
      <Contact/>
      <Footer/>
    </div>
  );
}
