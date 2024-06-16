import React, { useEffect, useState } from "react";
import "./SpLoader.css"; // Assuming you have a separate CSS file for SpLoader styles
import sp from '../../assets/sp.svg'
const SpLoader = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [showImg, setShowImg] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowImg(false);
      setText("I waited for 3 seconds to load");
      onComplete(); // Callback function to notify the parent component that loading is complete
    }, 3000); // Simulating a 3-second loading time
  }, [onComplete]);

  return (
    <div className="loader-container">
      {showImg ? (
        <img src={sp} alt="loader" className="loader-image" />
      ) : (
        <h3 className="loader-text">{text}</h3>
      )}
    </div>
  );
};

export default SpLoader;
