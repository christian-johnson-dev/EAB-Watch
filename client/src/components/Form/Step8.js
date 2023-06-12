import React from "react";

const Step8 = ({
  formData,
  handleCheckboxChange,
  handleLabelClick,
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

      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Step8;
