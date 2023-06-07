import React from "react";

const Step9 = ({ back, next }) => {
  // Component Logic
  return (
    <div>
      <h2>Step9 reporting for duty</h2>
      <button onClick={back}></button>
      <button onClick={next}></button>
    </div>
  );
};

export default Step9;
