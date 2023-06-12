import React from "react";

const FormNavButtons = ({
  previous,
  next,
  summary,
  returning,
  currentStep,
}) => {
  // Component Logic
  return (
    <div>
      {currentStep !== 2 && !returning && (
        <button onClick={previous}>Previous</button>
      )}
      {currentStep !== 11 && !returning && <button onClick={next}>Next</button>}
      {returning && <button onClick={summary}>Return to Summary</button>}
    </div>
  );
};

export default FormNavButtons;
