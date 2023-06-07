import React from "react";

const Step11 = ({ previous, next }) => {
  // Component Logic
  return (
    <div>
      <h2>Step11 reporting for duty</h2>
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Step11;
