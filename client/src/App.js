import React from "react";
import "./App.css";
import axios from "axios";
import MultiStepForm from "./components/wizzardForm/MultiStepForm";

const App = () => {
  return (
    <div className="App">
      <h1>React App</h1>
      <MultiStepForm />
    </div>
  );
};

export default App;
