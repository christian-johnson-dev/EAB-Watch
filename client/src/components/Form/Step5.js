import React from "react";
import FormNavButtons from "../Shared/FormNavButtons";

const Step5 = ({
  currentStep,
  formData,
  handleChange,
  summary,
  returning,
  previous,
  next,
}) => {
  // Component Logic
  return (
    <div>
      <div className="card">
        <div className="heading-container">
          <p className="step-heading">Section 3 of 5:</p>
          <h3 className="form-heading">
            Location <span>manual input</span>
          </h3>
        </div>
        <textarea
          name="location"
          placeholder="Enter a street address and city or intersection and city"
          value={formData.location}
          onChange={handleChange}
          className="text-input"
        />
        <FormNavButtons
          previous={previous}
          next={next}
          returning={returning}
          summary={summary}
          currentStep={currentStep}
        />
      </div>
    </div>
  );
};

export default Step5;
