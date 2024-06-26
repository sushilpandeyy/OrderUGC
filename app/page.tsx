import Image from "next/image";
import Header from "./components/Header";
import Herogrid from "./components/Herogrid";
import Logoslider from "./components/Logoslider";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section7 from "./components/Section7";
import Orderbutton from "./components/Orberbutton";

export default function Home() {
  return (
   <>
   <Header/>
   <div className="bg-gray-100 pb-10">
    <div className="mx-10">
   <Herogrid/>
   <Logoslider/>
   </div>
   </div>
   <div className="mx-10 mt-10 mb-20">
    <Section2/>
   </div>
   <div className="mx-10">
   <Section3/>
   <Section4/>
   </div>
   <div className="bg-gray-100">
    <div className="mx-10">
    <Section5/>
    </div>
   </div>
   <div className="my-10">
    <center>
   <Orderbutton/>
        </center>
    </div>
    <div className="mx-10 my-10">
      <Section6/>
      <Section7/>
    </div>
   </>
  );
}
