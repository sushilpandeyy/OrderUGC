import Image from "next/image";
import Header from "./components/Header";
import Herogrid from "./components/Herogrid";
import Logoslider from "./components/Logoslider";

export default function Home() {
  return (
   <>
   <Header/>
   <div className="bg-gray-100">
    <div className="mx-10">
   <Herogrid/>
   <Logoslider/>
   </div>
   </div>
   </>
  );
}
