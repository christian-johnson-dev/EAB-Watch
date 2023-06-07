import React from "react";

const Step12 = ({ back, next }) => {
  // Component Logic
  return (
    <div>
      <h2>Step12 reporting for duty</h2>
      <button onClick={back}></button>
      <button onClick={next}></button>
    </div>
  );
};

export default Step12;
