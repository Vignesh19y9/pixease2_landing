import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Workflow from "./components/Workflow";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/pixease/"
          element={
            <div className="max-w-7xl mx-auto pt-20 px-6">
              <HeroSection />
              <Workflow />
            </div>
          }
        />
        {/* <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} /> */}
      </Routes>
    </>
  );
};

export default App;
