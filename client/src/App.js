import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomePage from "./components/Pages/WelcomePage";
import AboutPage from "./components/Pages/AboutPage";
import EABInfoPage from "./components/Pages/EABInfoPage";
import LearnToReportPage from "./components/Pages/LearnToReportPage";
import ReportPage from "./components/Pages/ReportPage";
import SightingsPage from "./components/Pages/SightingsPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>React App</h1>

        <Routes>
          <Route
            path="/"
            element={<WelcomePage />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/eab-info"
            element={<EABInfoPage />}
          />
          <Route
            path="/learn-to-report"
            element={<LearnToReportPage />}
          />
          <Route
            path="/report"
            element={<ReportPage />}
          />
          <Route
            path="/sightings"
            element={<SightingsPage />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
