import React from "react";
import imageSrc from "../../public/Tickli.png"

interface CardProps {
  heading: string;
  desc: string;
}

const TickCard: React.FC<CardProps> = ({ heading, desc }) => {
  return (
    <div className="bg-transparent flex flex-col">
      <div className="flex items-start">
        <div className="p-2 ">
          <img src={imageSrc.src} alt="Card" className="w-auto h-auto" />
        </div>
        <div className="w-3/4 p-2">
          <h2 className="text-xl font-bold mb-2">{heading}</h2>
          <p className="text-l">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default TickCard;
