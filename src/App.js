import "./App.css";
import React, { useState, useRef, useEffect } from "react";

function MoveButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleClick = () => {
    const newX = position.x + getRandomArbitrary(100);
    const newY = position.y + getRandomArbitrary(100);
    setPosition({ x: newX, y: newY });
  };

  const getRandomArbitrary = (max) => {
    return Math.random() * (max - -max) + -max;
  };

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
  }, [position]);

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
      <img src="https://media.tenor.com/dUFL7zBnb_oAAAAM/love-love-you.gif" />
      <br />
      <div
        style={{
          display: "flex",

          width: "10%",
          justifyContent: "space-around",
        }}
      >
        <button style={{ backgroundColor: "pink" }}>yes</button>
        <button
          ref={buttonRef}
          style={{
            color: "white",
            backgroundColor: "black",
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
          onClick={handleClick}
        >
          No ;(
        </button>
      </div>
    </div>
  );
}

export default MoveButton;
