import React from "react";
import FormNavButtons from "../Shared/FormNavButtons";

const Step7 = ({
  formData,
  handleCheckboxChange,
  currentStep,
  summary,
  returning,
  previous,
  next,
}) => {
  // Component Logic
  return (
    <div>
      <h2>Secondary Indicators</h2>

      <div>
        <input
          type="checkbox"
          name="canopyDieback"
          checked={formData.canopyDieback}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="canopyDieback">Canopy Dieback</label>
      </div>

      <div>
        <input
          type="checkbox"
          name="epicormicShoots"
          checked={formData.epicormicShoots}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="epicormicShoots">Epicormic Shoots</label>
      </div>

      <div>
        <input
          type="checkbox"
          name="woodpecker"
          checked={formData.woodpecker}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="woodpecker">Woodpecker</label>
      </div>

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

export default Step7;
