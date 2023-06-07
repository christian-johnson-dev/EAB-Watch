import React from "react";

const Step8 = ({ back, next }) => {
  // Component Logic
  return (
    <div>
      <h2>Step8 reporting for duty</h2>
      <button onClick={back}></button>
      <button onClick={next}></button>
    </div>
  );
};

export default Step8;
