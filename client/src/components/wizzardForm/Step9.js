import React from "react";

const Step9 = ({ previous, next }) => {
  // Component Logic
  return (
    <div>
      <h2>Step9 reporting for duty</h2>
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Step9;
