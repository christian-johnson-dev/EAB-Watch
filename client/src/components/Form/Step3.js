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
      <div className="card">
        <div className="heading-container">
          <p className="step-heading">Section 2 of 5:</p>
          <h3 className="form-heading">Sighting Date</h3>
        </div>
        <div className="content-container">
          <div className="input-container">
            <div className="flex justify-between">
              <p className="input-label">Date</p>
              <p className="validation-message">
                {formData.date ? "" : "Required"}
              </p>
            </div>
            <input
              type="date"
              name="date"
              placeholder="Date"
              value={formData.date}
              onChange={handleChange}
              className="text-input"
            />
          </div>
        </div>
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

export default Step3;
