import React from "react";

const Step2 = ({ next, back }) => {
  // Component Logic
  return (
    <div>
      <h2>Step2 reporting for duty</h2>
      <button onClick={back}></button>
      <button onClick={next}></button>
    </div>
  );
};

export default Step2;
