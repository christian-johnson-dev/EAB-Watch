import React from "react";
import "./App.css";
import axios from "axios";
import MultiStepForm from "./components/wizzardForm/MultiStepForm";

const App = () => {
  const [message, setMessage] = React.useState("Loading...");
  React.useEffect(() => {
    axios
      .get("http://localhost:8000/api")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>React App</h1>
      <h2>Message from backend: {message} </h2>
      <MultiStepForm />
    </div>
  );
};

export default App;
