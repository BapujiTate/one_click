import React from "react";

import Doctors from "./Doctors";
import DailyNeeds from "./DailyNeeds";
import Grocery from "./Grocery";
// import Map from "./Googlemap";
import Medicines from "./Medicines";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="row">
        <Doctors />
        <Medicines />
      </div>
      <div className="row">
        <DailyNeeds />
        <Grocery />
      </div>
      {/* <div className="row">
        <Map />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
