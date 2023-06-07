import React from "react";

const Step3 = ({ next, back }) => {
  // Component Logic
  return (
    <div>
      <h2>Step3 reporting for duty</h2>
      <button onClick={back}></button>
      <button onClick={next}></button>
    </div>
  );
};

export default Step3;
