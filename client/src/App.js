import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import WelcomePage from "./Pages/WelcomePage";
import AboutPage from "./Pages/AboutPage";
import EABInfoPage from "./Pages/EABInfoPage";
import LearnToReportPage from "./Pages/LearnToReportPage";
import ReportPage from "./Pages/ReportPage";
import SightingsPage from "./Pages/SightingsPage";

const App = () => {
  return (
    <Router>
      <div className=" bg-dark h-screen flex flex-col">
        <Navbar />

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
