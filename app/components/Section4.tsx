import Image from "next/image";
import TickCard from "./Tickcard";

export default function Section4() {
  return (
   <>
   <center><h2 className="font-poppins text-4xl font-medium font-bold mb-9">Hassle-free video ads from start <br/>to finish</h2></center>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-10">
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mb-10">
<TickCard
        heading="Choose from best India-based UGC creators"
        desc="Find creatives your audience can identify with.Get UGC that targets your preferred demographic and matches your vision from our massive pool of talented and diverse creators."
      />
<TickCard
        heading="Customize to agency specs with white labeling"
        desc="Not just for brands, agencies have the option to enable white labeling and other custom features.let us know you agency-specific needs or preferences and we’ll make it happen."
/>
<TickCard
        heading="Get ready-to-post videos thanks to in-house editing"
        desc="Order ads and get high-quality , finished ads-it’s that easy.Our in-house editors polish your ads and have your videos looking professional in no time."
/>
<TickCard
        heading="Optimize ads fast in our one-stop platform"
        desc="Managing creatives and the creation can get messy. Stay organized and on track with our intuitive platform designed to get you from idea to ad quickly, simply, and efficiently."
/>
</div>
   </>
  );
}
