"use client";
import Image from "next/image";

export default function Header() {
  return (
   <>
  <div className="border-b border-gray-200 flex justify-between items-center">
    <div className="px-5 py-5">Logo</div>
    <div className="px-5 py-5">
        <button className="border px-4 py-1 rounded-xl shadow-2xl bg-opacity-80">
        <p className="font-poppins text-20 font-medium leading-30 text-left text-purple-700">
    Order Now
</p>
        </button>
    </div>
</div>
   </>
  );
}
