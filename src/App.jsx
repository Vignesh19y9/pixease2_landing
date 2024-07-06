import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Workflow from "./components/Workflow";
import Arrangment from "./components/Arrangment";
import Simultaneous from "./components/Simultaneous";
import Annotation from "./components/Annotation";
import MoreFeatures from "./components/MoreFeatures";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Auto from "./components/Auto";

import DownloadButton from "./components/DownloadButton";

const App = () => {
  return (
    <Routes>
      <Route
        path="/pixease/"
        element={
          <div>
            <Navbar />
            <HeroSection />
            <Workflow />
            <DownloadButton />
            <Arrangment />
            <Simultaneous />
            <Annotation />
            <Auto />
            <MoreFeatures />
            <Footer />
          </div>
        }
      />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
};

export default App;
