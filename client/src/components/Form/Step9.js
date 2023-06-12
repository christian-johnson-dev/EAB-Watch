import React from "react";
import FormNavButtons from "../Shared/FormNavButtons";

const Step9 = ({
  formData,
  handleCheckboxChange,
  handleChange,
  summary,
  returning,
  previous,
  next,
  currentStep,
}) => {
  // Component Logic
  return (
    <div>
      <h2>Comments:</h2>
      <textarea
        name="comments"
        placeholder="Feel free to describe, comment or ask a question."
        value={formData.comments}
        onChange={handleChange}
      />
      {/* Checkbox for hasSpecimen */}
      <label htmlFor="hasSpecimen">Do you have a specimen?</label>
      <input
        type="checkbox"
        name="hasSpecimen"
        checked={formData.hasSpecimen}
        onChange={handleCheckboxChange}
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

export default Step9;
