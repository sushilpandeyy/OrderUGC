"use client";
import Image from "next/image";

export default function Herogrid() {
  return (
   <>
   <div className="bg-gray-100">
   <h2 className="pt-20 text-3xl">Order UGC in Minutes</h2>
   <p>Getting UGC is Easy with Brand name, whether you need 20 videos or just one.</p>
   <div className="pt-10"></div>
   <p>
Simply choose the video pack that suits your business best, let us 
know what you need, and we’ll make sure your video is produced 
exactly as you picture it. </p>
<button className="border px-4 py-1 mt-3 rounded-xl shadow-2xl bg-indigo-800">
        <p className="font-poppins text-20 font-medium leading-30 text-left text-white">
    Order Now
</p>
        </button>
        <div className="pt-10 flex content-center">
            <p className="font-poppins text-2xl font-semibold leading-8 text-left">200+</p><p className="font-poppins text-base font-semibold leading-7 text-left"> brands and agencies advertise with us</p>
        </div>
</div>
   </>
   )}