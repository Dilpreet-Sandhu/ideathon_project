import About from "@/components/About";
import Banner from "@/components/Banner";
import EventSchedule from "@/components/EventSchedule";
import Footer from "@/components/Footer";
import Prices from "@/components/Prices";


export default function Home() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden min-h-screen flex flex-col">

      <Banner/>

      <About/>

      <EventSchedule/>

      <Prices/>

      <Footer/>

    </div>
  );
}
