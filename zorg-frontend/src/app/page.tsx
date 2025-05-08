import ServiceSection from "@/components/ServiceSection";
import TopSection from "@/components/TopSection";
import WorkShowcase from "@/components/WorkShowcase";
import RecentWorks from "@/components/RecentWorks";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white font-sans">
      
      <TopSection/>
      <WorkShowcase/>
      <ServiceSection/>
      <RecentWorks/>
      <Insights/>
      <Footer/>
      
      
    </main>
  );
}
