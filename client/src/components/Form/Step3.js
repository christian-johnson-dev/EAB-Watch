import React from "react";
import FormNavButtons from "../Shared/FormNavButtons";

const Step3 = ({
  formData,
  handleChange,
  currentStep,
  summary,
  returning,
  previous,
  next,
}) => {
  // Component Logic
  return (
    <div>
      <h2>When did you make this sighting?</h2>
      <input
        type="date"
        name="date"
        placeholder="Date"
        value={formData.date}
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

export default Step3;
