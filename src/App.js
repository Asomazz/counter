import "./App.css";
import React, { useState, useRef, useEffect } from "react";

function MoveButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0); // Track image index

  const handleClick = (button) => {
    const newX = position.x + getRandomArbitrary(100);
    const newY = position.y + getRandomArbitrary(100);
    setPosition({ x: newX, y: newY });

    if (button === "No") {
      // Update image index on No click (logic from previous solution)
      setImageIndex((prevIndex) => {
        if (prevIndex < 2) {
          return prevIndex + 1;
        } else {
          return prevIndex;
        }
      });
    } else {
      // Reset image index on Yes click
      setImageIndex(0);
    }
  };

  const getRandomArbitrary = (max) => {
    return Math.random() * (max - -max) + -max;
  };

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
  }, [position]);

  const images = [
    "https://media.tenor.com/dUFL7zBnb_oAAAAM/love-love-you.gif",
    "https://i.pinimg.com/474x/7a/20/dd/7a20dd7e75a1f10d1d66a41e05925606.jpg",
    "https://i.pinimg.com/474x/6e/36/17/6e3617b50bea87164c3dc22e8f5eab16.jpg",
  ]; // Array of image URLs

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={images[imageIndex]} alt="Image" />{" "}
      {/* Use image index to select image */}
      <br />
      <div
        style={{
          display: "flex",
          width: "10%",
          justifyContent: "space-around",
        }}
      >
        <button
          style={{ backgroundColor: "pink" }}
          onClick={() => handleClick("Yes")}
        >
          yes
        </button>
        <button
          ref={buttonRef}
          style={{
            color: "white",
            backgroundColor: "black",
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
          onClick={() => handleClick("No")}
        >
          No ;(
        </button>
      </div>
    </div>
  );
}

export default MoveButton;
