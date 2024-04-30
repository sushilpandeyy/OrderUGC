import Image from "next/image";
import Header from "./components/Header";
import Herogrid from "./components/Herogrid";
import Logoslider from "./components/Logoslider";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

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
   </div>
   </>
  );
}
