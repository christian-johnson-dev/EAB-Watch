import React from "react";
import FormNavButtons from "../Shared/FormNavButtons";

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
      <h2>Ash Tree Identification</h2>
      <p>
        Emerald Ash Borer's will only infest Ash trees. Below are a couple
        visual clues to identify an Ash tree.
      </p>
      <button>That's OK. I'm sure this is an Ash.</button>
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
      <div>
        <input
          type="radio"
          id="ashTreeYes"
          name="ashTree"
          value="true"
          checked={formData.isAshTree === true}
          onChange={handleAshTreeChange}
        />
        <label htmlFor="ashTreeYes">Yes</label>

        <input
          type="radio"
          id="ashTreeNo"
          name="ashTree"
          value="false"
          checked={formData.isAshTree === false}
          onChange={handleAshTreeChange}
        />
        <label htmlFor="ashTreeNo">No</label>

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
      <FormNavButtons
        previous={previous}
        next={next}
        currentStep={currentStep}
        returning={returning}
        summary={summary}
      />
    </div>
  );
};

export default Step6;
