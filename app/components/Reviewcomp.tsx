"use client";
import React, { useState } from 'react';
import ReviewCard from './Reviewbox';
import Sidestars from "../../public/Sidestars.png"

interface Review {
  title: string;
  rating: number;
  content: string;
  author: string;
  date: string;
}

const reviews: Review[] = [
  {
    title: 'Great Service!',
    rating: 3,
    content: 'The whole experience was smooth and convenient.',
    author: 'John Doe',
    date: 'April 15, 2024',
  },
  {
    title: 'Another Great Service!',
    rating: 4,
    content: 'The whole experience was smooth and convenient.',
    author: 'Jane Smith',
    date: 'April 16, 2024',
  },
  {
    title: 'Excellent Service!',
    rating: 5,
    content: 'The whole experience was smooth and convenient.',
    author: 'Michael Johnson',
    date: 'April 17, 2024',
  },
];

const Reviewcomp: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function rendercard(item: Review) {
    return (
      <ReviewCard
        key={item.date} 
        title={item.title}
        rating={item.rating}
        content={item.content}
        author={item.author}
        date={item.date}
      />
    );
  }

  return (
    <div className="flex">
      <div className="w-2/5 flex flex-col justify-center items-center">
        <h3 className="text-lg font-bold mb-2">Great</h3>
        <img src={Sidestars.src} alt="description" className="w-auto h-auto mb-2" />
        <p className="text-gray-700">Based on <u>406 reviews</u></p>
      </div>
      <div className="w-3/5 flex items-center overflow-x-auto">
        {reviews.map(rendercard)}
      </div>
    </div>
  );
};

export default Reviewcomp;
