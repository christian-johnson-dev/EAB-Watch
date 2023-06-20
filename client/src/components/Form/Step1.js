import React from "react";
import { Link } from "react-router-dom";

const Step1 = ({ next }) => {
  // Component Logic
  return (
    <div className="card">
      <h2 className="w-full border-b-2 text-dark text-3xl text-center pb-2 mb-6">
        Reporting an EAB
      </h2>
      <p>This form will have 4 sections spread over 10 screens:</p>
      <ol className="mx-5 my-5 ">
        <li>Contact Info</li>
        <li>Sighting Date and Location</li>
        <li>Shighting checklist and description</li>
        <li>Upload photos</li>
      </ol>
      <p>It should take about 5 minutes to complete.</p>
      <button
        onClick={next}
        className="bg-verified text-light font-bold py-4 px-4 rounded-xl uppercase text-lg my-5 cursor-pointer"
      >
        Let's get started!
      </button>
      {/* Link back to sightings */}
      <Link
        to={"/sightings"}
        className="bg-light border-2 rounded-md border-black text-dark mt-12 flex justify-center  w-1/2 mx-auto"
      >
        I'll come back later...
      </Link>
      {/* Component Content */}
    </div>
  );
};

export default Step1;
