import React from "react";

const Step5 = ({ back, next }) => {
  // Component Logic
  return (
    <div>
      <h2>Step5 reporting for duty</h2>
      <button onClick={back}></button>
      <button onClick={next}></button>
    </div>
  );
};

export default Step5;
