import React from "react";

const Step7 = ({ back, next }) => {
  // Component Logic
  return (
    <div>
      <h2>Step7 reporting for duty</h2>
      <button onClick={back}></button>
      <button onClick={next}></button>
    </div>
  );
};

export default Step7;
