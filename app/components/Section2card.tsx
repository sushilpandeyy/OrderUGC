import Image from "next/image";
import "./Other.css"; 
import sectimg1 from "../../public/sectimg1.png";
import sectimg2 from "../../public/sectimg2.png";

export default function Section2Card() {
  return (
    <>
      <div className="card w-full h-full grid grid-cols-2 gap-2">
  <div className="p-5 relative">
    <Image src={sectimg2} alt="" />
    <div className="absolute bottom-96 w-auto left-0 leftneg text-white bg-black rounded-full border border-white px-3 py-1">Less engagement</div>
    <div className="absolute bottom-80 w-auto left-0 leftneg text-white bg-black rounded-full border border-white px-3 py-1">Fewer clicks</div>
    <div className="absolute bottom-72 w-auto left-0 leftneg text-white bg-black rounded-full border border-white px-3 py-1">Fewer conversions</div>
  </div>
  <div className="p-5 relative">
    <Image src={sectimg1} alt="" />
    <div className="absolute bottom-96 w-auto left-0 leftneg text-white bg-black rounded-full border border-white px-3 py-1">More engagement</div>
    <div className="absolute bottom-80 w-auto left-0 leftneg text-white bg-black rounded-full border border-white px-3 py-1 mt-1">Higher CTR</div>
    <div className="absolute bottom-72 w-auto left-0 leftneg text-white bg-black rounded-full border border-white px-3 py-1 mt-1">Greater ROAS</div>
  </div>
</div>

    </>
  );
}
