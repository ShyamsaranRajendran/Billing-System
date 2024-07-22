import React from "react";
import "./Rating.css"; // Import the CSS file

const Rating = ({ rating }) => {
  // Ensure rating is between 0 and 5
  const clampedRating = Math.max(0, Math.min(rating, 5));

  // Determine the filled and empty star count
  const fullStars = Math.floor(clampedRating);
  const halfStar = clampedRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="rating">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <span key={`full-${i}`} className="star full">
            ★
          </span>
        ))}
      {halfStar && <span className="star half">★</span>}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <span key={`empty-${i}`} className="star empty">
            ★
          </span>
        ))}
    </div>
  );
};

export default Rating;
