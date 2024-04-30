import Image from "next/image";
import Section2Card from "./Section2card";

export default function Section2() {
  
  return (
    <>
    <center>
        <p className="font-poppins text-4xl font-semibold leading-18 text-center">
        Increase engagement and <br/> improve ROAS with UGC ads
        </p>
        <p className="font-poppins text-xl leading-7 text-center">
        Studies show that ads with faces outperform ads without them.<br/>*with UGC, create more effective marketing campaigns that grab attention, <br/>convey emotion, and build trust.
        </p>
    </center>
    <div className="mt-5">
    <Section2Card/>
    </div>
    </>
  );
}
