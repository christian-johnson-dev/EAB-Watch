import React from "react";
import FormNavButtons from "../Shared/FormNavButtons";
import { Link } from "react-router-dom";

const Step2 = ({
  formData,
  handleChange,
  currentStep,
  previous,
  next,
  returning,
  summary,
}) => {
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});

  const validate = () => {
    let tempErrors = {};
    let formIsValid = true;
    tempErrors.firstName =
      formData.firstName.trim() !== "" ? "" : "First Name is required";
    tempErrors.lastName =
      formData.lastName.trim() !== "" ? "" : "Last Name is required";
    // Nested ternary operator for is required and is valid
    tempErrors.email = formData.email
      ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? ""
        : "Email is not valid."
      : "Email is required.";
    tempErrors.phone = formData.phone
      ? /^[0-9]{10}$/.test(formData.phone)
        ? ""
        : "Phone number is not valid."
      : "";

    for (let error in tempErrors) {
      if (tempErrors[error] !== "") {
        formIsValid = false;
        break;
      }
    }

    setErrors({
      ...tempErrors,
    });

    return formIsValid;
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  React.useEffect(() => {
    if (currentStep !== 2) return;
    if (Object.keys(touched).length !== 0) validate();
  }, [formData, touched]); // validate when formData or touched changes

  return (
    <>
      <div className="card">
        <Link
          to="/sightings"
          className="card-cancel"
        >
          Cancel
        </Link>
        <div className="heading-container">
          <p className="step-heading">Section 1 of 4:</p>
          <h3 className="form-heading">Contact info</h3>
        </div>

        <div className="input-container">
          <div className="flex justify-between">
            <p className="input-label">First Name</p>
            <p className="validation-message">
              {touched.firstName && errors.firstName}
            </p>
          </div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name is required"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-input"
          />
        </div>

        <div className="input-container">
          <div className="flex justify-between">
            <p className="input-label">Last Name</p>
            <p className="validation-message">
              {touched.lastName && errors.lastName}
            </p>
          </div>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name is required"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-input"
          />
        </div>

        <div className="input-container">
          <div className="flex justify-between">
            <p className="input-label">Email</p>
            <p className="validation-message">
              {touched.email && errors.email}
            </p>
          </div>
          <input
            type="text"
            name="email"
            placeholder="Email is required"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-input"
          />
        </div>

        <div className="input-container">
          <div className="flex justify-between">
            <p className="input-label">Phone</p>
            <p className="validation-message">
              {touched.phone && errors.phone}
            </p>
          </div>
          <input
            type="text"
            name="phone"
            placeholder="Phone is optional"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-input"
          />
        </div>

        <FormNavButtons
          previous={previous}
          next={next}
          returning={returning}
          summary={summary}
          currentStep={currentStep}
        />
        {/* end card */}
      </div>
    </>
  );
};

export default Step2;
