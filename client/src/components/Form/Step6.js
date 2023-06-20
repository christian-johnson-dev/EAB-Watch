import React from "react";
import FormNavButtons from "../Shared/FormNavButtons";
import { Link } from "react-router-dom";

const Step6 = ({
  formData,
  handleAshTreeChange,
  summary,
  returning,
  currentStep,
  previous,
  next,
}) => {
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
          <p className="step-heading">Section 4 of 6:</p>
          <h3 className="form-heading">Ash Tree Identification</h3>
        </div>
        <p>
          Emerald Ash Borer's will only infest Ash trees. Below are a couple
          visual clues to identify an Ash tree.
        </p>
        <button className="bg-black text-white text-sm px-8 py-4 mx-auto">
          I'm sure this is an Ash.
        </button>
        <div>
          Card 1
          <p>
            Ash leaves grow with opposing leaflets and a single leaflet at the
            end.
          </p>
        </div>
        <div>
          Card 2
          <p>Ash branches generally grow from the trunk in opposing pairs.</p>
        </div>
        <div>
          Card 3
          <p>
            Ash bark is generally smooth in young trees and becomes more
            diamond-shaped and ridged as the tree matures.
          </p>
        </div>
        <p>Does your sighting involve an Ash tree?</p>
        <div className="border-2  mx-auto rounded-lg border-dark flex gap-5 justify-center max-w-max px-6 py-3 mt-2">
          <div className="flex gap-1">
            <input
              type="radio"
              id="ashTreeYes"
              name="ashTree"
              value="true"
              checked={formData.isAshTree === true}
              onChange={handleAshTreeChange}
            />
            <label htmlFor="ashTreeYes">Yes</label>
          </div>
          <div className="flex gap-1">
            <input
              type="radio"
              id="ashTreeNo"
              name="ashTree"
              value="false"
              checked={formData.isAshTree === false}
              onChange={handleAshTreeChange}
            />
            <label htmlFor="ashTreeNo">No</label>
          </div>
          <div className="flex gap-1">
            <input
              type="radio"
              id="ashTreeNotSure"
              name="ashTree"
              value="notSure"
              checked={formData.isAshTree === undefined}
              onChange={handleAshTreeChange}
            />
            <label htmlFor="ashTreeNotSure">Not Sure</label>
          </div>
        </div>
        <FormNavButtons
          previous={previous}
          next={next}
          currentStep={currentStep}
          returning={returning}
          summary={summary}
        />
      </div>
    </div>
  );
};

export default Step6;
