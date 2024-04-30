import Image from "next/image";
import Header from "./components/Header";
import Herogrid from "./components/Herogrid";

export default function Home() {
  return (
   <>
   <Header/>
   <div className="ml-10 mr-10">
   <Herogrid/>
   </div>
   </>
  );
}
