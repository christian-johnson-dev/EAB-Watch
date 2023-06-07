import React from "react";

const Step6 = ({ back, next }) => {
  // Component Logic
  return (
    <div>
      <h2>Step6 reporting for duty</h2>
      <button onClick={back}></button>
      <button onClick={next}></button>
    </div>
  );
};

export default Step6;
