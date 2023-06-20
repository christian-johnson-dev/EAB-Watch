import React from "react";
import FormNavButtons from "../Shared/FormNavButtons";
import { Link } from "react-router-dom";

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
      <div className="card">
        <Link
          to="/sightings"
          className="card-cancel"
        >
          Cancel
        </Link>
        <div className="heading-container">
          <p className="step-heading">Section 5 of 6:</p>
          <h3 className="form-heading">
            Indicators <span>-secondary</span>
          </h3>
        </div>

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
    </div>
  );
};

export default Step7;
