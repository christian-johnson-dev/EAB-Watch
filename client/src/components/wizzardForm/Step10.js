import React from "react";

const Step10 = ({ back, next }) => {
  // Component Logic
  return (
    <div>
      <h2>Step10 reporting for duty</h2>
      <button onClick={back}></button>
      <button onClick={next}></button>
    </div>
  );
};

export default Step10;
