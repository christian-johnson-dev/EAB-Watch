import React from "react";
//import steps 1-12
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";
import Step10 from "./Step10";
import Step11 from "./Step11";
import Step12 from "./Step12";
import MultiStepSubmit from "./MultiStepSubmit";

const MultiStepForm = () => {
  const [formData, setFormData] = React.useState({});
  const handleChange = (event) => {
    setFormData({
      ...formData,
      // Make sure db column names match the name attribute on your form inputs!
      [event.target.name]: event.target.value,
    });
  };
  const [currentStep, setCurrentStep] = React.useState(1);
  const next = () => {
    setCurrentStep(currentStep + 1);
  };
  const previous = () => {
    setCurrentStep(currentStep - 1);
  };

  switch (currentStep) {
    case 1:
      return (
        <Step1
          next={next}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 2:
      return (
        <Step2
          next={next}
          previous={previous}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 3:
      return (
        <Step3
          next={next}
          previous={previous}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 4:
      return (
        <Step4
          next={next}
          previous={previous}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 5:
      return (
        <Step5
          next={next}
          previous={previous}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 6:
      return (
        <Step6
          next={next}
          previous={previous}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 7:
      return (
        <Step7
          next={next}
          previous={previous}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 8:
      return (
        <Step8
          next={next}
          previous={previous}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 9:
      return (
        <Step9
          next={next}
          previous={previous}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 10:
      return (
        <Step10
          next={next}
          previous={previous}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 11:
      return (
        <Step11
          next={next}
          previous={previous}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 12:
      return (
        <Step12
          next={next}
          previous={previous}
          handleChange={handleChange}
          formData={formData}
        />
      );

    default:
      return <MultiStepSubmit formData={formData} />;
  }
};

export default MultiStepForm;
