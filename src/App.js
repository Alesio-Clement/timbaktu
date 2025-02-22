import React from "react";
import { Navbar,Footer } from "./components";
import ConfigRoutes from "./ConfigRoutes";

const App = () => {
  return (
    <div className="main-wrapper">
      <Navbar />
      <ConfigRoutes />
      <Footer/>
    </div>
  );
};

export default App;
