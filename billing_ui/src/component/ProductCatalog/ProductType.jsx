import React, { useState, useEffect } from "react";
import Card from "./CardType.jsx";
import "./css/Carousel.css";

const Carousel = () => {
  const cards = Array.from({ length: 20 }, (_, i) => `Card ${i + 1}`);
  const [startIndex, setStartIndex] = useState(0);

  // Move to the next set of cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Adjust timing as needed

    return () => clearInterval(interval);
  }, [cards.length]);

  const next = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const visibleCards = cards
    .slice(startIndex, startIndex + 6)
    .concat(cards.slice(0, Math.max(0, startIndex + 6 - cards.length)));

  return (
    <div className="carousel">
      <button onClick={prev} className="arrow">
        ◀
      </button>
      <div className="carousel-container">
        {visibleCards.map((content, index) => (
          <Card key={index} content={content} />
        ))}
      </div>
      <button onClick={next} className="arrow">
        ▶
      </button>
    </div>
  );
};

export default Carousel;
