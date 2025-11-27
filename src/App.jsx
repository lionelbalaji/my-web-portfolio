import React, { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <Dashboard />
    </div>
  );
};

export default App;
