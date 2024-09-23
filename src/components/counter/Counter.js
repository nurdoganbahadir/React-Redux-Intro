import React from "react";
import "./Counter.css";

const Counter = () => {
  return (
    <div>
      <h2 className="counter-header">Counter with Redux</h2>
      <h1>0</h1>
      <h2>text</h2>
      <div>
        <button className="counter-button positive">ARTTIR</button>
        <button className="counter-button">RESET</button>
        <button className="counter-button negative">AZALT</button>
      </div>
    </div>
  );
};

export default Counter;
