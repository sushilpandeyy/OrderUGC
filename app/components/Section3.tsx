import Image from "next/image";
import Cardsec3 from "./Cardsec3";

export default function Section3() {
  
  return (
    <>
    <center><h2 className="font-poppins text-4xl font-medium font-bold mb-9">Choose your UGC video pack</h2></center>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
  <Cardsec3 
    title="Main Card Title" 
    description="For first-timer looking to try out ads and test us within their workflow" 
    numberOfVideos={10} 
    amount={99.99} 
  />
  <Cardsec3 
    title="Main Card Title" 
    description="For first-timer looking to try out ads and test us within their workflow" 
    numberOfVideos={10} 
    amount={99.99} 
  />
  <Cardsec3 
    title="Main Card Title" 
    description="For first-timer looking to try out ads and test us within their workflow" 
    numberOfVideos={10} 
    amount={99.99} 
  />
</div>


    </>
  );
}
