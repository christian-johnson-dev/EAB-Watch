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
      <h2>Location: Manual entry</h2>
      <textarea
        name="location"
        placeholder="Enter a street address and city or intersection and city"
        value={formData.location}
        onChange={handleChange}
      />
      <FormNavButtons
        previous={previous}
        next={next}
        returning={returning}
        summary={summary}
        currentStep={currentStep}
      />
    </div>
  );
};

export default Step5;
