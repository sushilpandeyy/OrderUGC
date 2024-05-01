import React from 'react';

interface ReviewProps {
  title: string;
  rating: number;
  content: string;
  author: string;
  date: string;
}

const ReviewCard: React.FC<ReviewProps> = ({ title, rating, content, author, date }) => {
  const renderStars = () => {
    const totalStars = 5;
    const filledStars = Math.min(rating, totalStars); // Ensure rating doesn't exceed total stars
    const emptyStars = totalStars - filledStars;

    const filledStarIcon = <span className="text-green-500">★</span>;
    const emptyStarIcon = <span className="text-gray-300">☆</span>;

    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(filledStarIcon);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(emptyStarIcon);
    }

    return stars;
  };

  return (
    <div className="review-card-container w-1/3">
      <div className="flex flex-col bg-white shadow-lg rounded-lg p-4 m-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center mb-1">
          {renderStars()}
        </div>
        <p className="text-gray-600 text-sm">{content}</p>
        <p className="text-gray-500 text-xs mt-2">{author}, {date}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
