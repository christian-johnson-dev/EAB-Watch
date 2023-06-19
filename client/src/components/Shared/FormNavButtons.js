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
    <div className="form-nav-container">
      {currentStep !== 2 && !returning && (
        <button
          className="form-nav-button"
          onClick={previous}
        >
          Previous
        </button>
      )}
      {currentStep !== 11 && !returning && (
        <button
          onClick={next}
          className="form-nav-button"
        >
          Next
        </button>
      )}
      {returning && (
        <button
          onClick={summary}
          className="form-nav-button"
        >
          Return to Summary
        </button>
      )}
    </div>
  );
};

export default FormNavButtons;
