import React from "react";
import FormNavButtons from "../Shared/FormNavButtons";

const Step8 = ({
  formData,
  handleCheckboxChange,
  handleLabelClick,
  summary,
  returning,
  currentStep,
  previous,
  next,
}) => {
  return (
    <div>
      <h2>Primary Indicators</h2>

      <div onClick={(event) => handleLabelClick(event, "feedingGallery")}>
        <label htmlFor="feedingGallery">
          <input
            type="checkbox"
            name="feedingGallery"
            checked={formData.feedingGallery}
            onChange={handleCheckboxChange}
          />
          <h3>Serpentine Feeding Galleries</h3>
          <p>
            As the larvae eat through the tree, they leave winding paths full of
            sawdust just under the bark.
          </p>
        </label>
      </div>

      <div onClick={(event) => handleLabelClick(event, "exitHoles")}>
        <label htmlFor="exitHoles">
          <input
            type="checkbox"
            name="exitHoles"
            checked={formData.exitHoles}
            onChange={handleCheckboxChange}
          />
          <h3>D-Shaped Exits in Bark</h3>
          <p>
            As the larvae mature, they chew their way out of the tree, leaving
            D-shaped exit holes.
          </p>
        </label>
      </div>

      <div onClick={(event) => handleLabelClick(event, "barkSplitting")}>
        <label htmlFor="barkSplitting">
          <input
            type="checkbox"
            name="barkSplitting"
            checked={formData.barkSplitting}
            onChange={handleCheckboxChange}
          />
          <h3>Bark Splitting</h3>
          <p>Bark splits to reveal S-shaped galleries packed with sawdust.</p>
        </label>
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

export default Step8;
