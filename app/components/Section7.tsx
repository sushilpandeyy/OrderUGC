import Image from "next/image";
import Reviewcomp from "./Reviewcomp";

export default function Section7() {
  return (
   <>
   <div className="py-10">
   <h2 className="font-poppins text-4xl font-medium font-bold mb-9">FAQ</h2>
  <ul className="list-none pl-6">
    <li className="mb-4 pb-4 border-b border-gray-300">Why Name Packs?</li>
    <li className="mb-4 pb-4 border-b border-gray-300">How do packs work?</li>
    <li className="mb-4 pb-4 border-b border-gray-300">What packs can be used for?</li>
    <li className="mb-4 pb-4 border-b border-gray-300">Do packs expire?</li>
    <li className="mb-4 pb-4 border-b border-gray-300">Where can I see my balance?</li>
    <li className="mb-4 pb-4 border-b border-gray-300">Is it refundable?</li>
    <li>Can I discuss my needs with a representative?</li>
  </ul>

    </div>
   </>
  );
}
