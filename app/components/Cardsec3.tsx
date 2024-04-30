import React from 'react';
import bgimg from "../../public/bgimg.png"
import Charm_Tick from "../../public/Charm_Tick.png"

interface CardProps {
  title: string;
  description: string;
  numberOfVideos: number;
  amount: number;
}

const Cardsec3: React.FC<CardProps> = ({ title, description, numberOfVideos, amount }) => {
  return (
    <div className="rounded-lg w-96 h-auto border border-solid border-F8F8F8">
      <div className="bg-white rounded-lg mb-6" style={{ backgroundImage: `url(${bgimg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h3 className="text-lg text-white	pt-4 px-4 font-bold mb-2">{title}</h3>
        <p className="text-white p-4">{description}</p>
      </div>
      <div className="mx-5">
       <div className="flex content-end justify-start	items-end">
       <div>
      <p className="text-4xl" style={{ backgroundImage: `url(${bgimg.src})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'transparent', WebkitBackgroundClip: 'text' }}>
        {numberOfVideos}
      </p>
    </div>
        <div className='flex content-end'>
        <p className="text-base text-lg	">
          Videos
        </p>
        </div>
        
       </div>
       <div className="listitem mt-10	mb-10">
  <div className="flex content-center flex-start">
    <img src={Charm_Tick.src} alt="" />
    <div>
    jeybi hihsciu
  </div>
  </div>
  <div className="flex content-center flex-start">
    <img src={Charm_Tick.src} alt="" />
    <div>
    jeybi hihsciu
  </div>
  </div>
  <div className="flex content-center flex-start">
    <img src={Charm_Tick.src} alt="" />
    <div>
    jeybi hihsciu
  </div>
  </div>
  
</div>
        <p className="font-bold text-3xl mb-2">Rs {amount}</p>
        <button className="bg-indigo-950 text-white px-4 py-2 w-full rounded-full hover:bg-blue-600 mt-2 mb-2">Order Now</button>
      </div>
      </div>
  );
};

export default Cardsec3;
