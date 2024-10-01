
import React from 'react';
import '../Layout/ReviewCard.css'

const ReviewCard = ({ review }) => {
  const { name, date, rating, comment, imageUrl } = review;

  return (
    <div className="review-card">
      <div className="review-header">
        {imageUrl && <img src={imageUrl} alt={`${name}'s avatar`} className="review-image" />}
        <div>
          <h3 className="reviewer-name">{name}</h3>
          <span className="review-date">{date}</span>
        </div>
      </div>
      <div className="review-rating">
        {Array(rating).fill('⭐').join('')}
      </div>
      <p className="review-comment">{comment}</p>
    </div>
  );
};

export default ReviewCard;
