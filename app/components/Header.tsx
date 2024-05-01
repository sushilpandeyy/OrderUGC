"use client";
import Image from "next/image";
import Orderbutton from "./Orberbutton";

export default function Header() {
  return (
   <>
  <div className="border-b border-gray-200 flex justify-between items-center">
    <div className="px-5 py-5">Logo</div>
    <div className="px-5 py-5">
        <Orderbutton/>
    </div>
</div>
   </>
  );
}
