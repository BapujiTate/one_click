import React from "react";
import CardContents from "./Card-Content";
import DropDown from "./DropDown";

const medicines = {
  medicinesCall: 7200712345,
  medicinesLink:
    "https://www.netmeds.com/healthstore?source_attribution=ADW-CPC-Search-NMS-Brand-NC&utm_source=ADW-CPC-Search-NMS-Brand-NC&utm_medium=CPC&utm_campaign=ADW-CPC-Search-NMS-Brand-NC&gclid=Cj0KCQjwt-6LBhDlARIsAIPRQcKlZPCcOBpYr6IScWowItyb72GdExWxKvwTcwAeDNYgKqiBiuFjgWgaAgg0EALw_wcB"
};

const dropdownData = {
  diabities: "Diabities Medicines",
  bloodPressure: "Blood Pressure Medicines",
  monthlyReports: "Monthly Check Up Reports"
};

function Medicines() {
  return (
    <div className="card col-lg-6 col-md-12 col-sm-12" id="Medicines">
      <h1>Your Medicines</h1>
      <img
        src="https://images.theconversation.com/files/256057/original/file-20190129-108364-17hlc1x.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
        alt=""
      />
      <p className="StylePtag">
        Order online and get home delivery of medicines. MEDICO is a trusted
        Indian online pharmacy. Order prescription/OTC medicines online. Cash on
        Delivery available.
      </p>
      <CardContents
        call={medicines.medicinesCall}
        link={medicines.medicinesLink}
      />
      <DropDown
        first={dropdownData.diabities}
        second={dropdownData.bloodPressure}
        third={dropdownData.monthlyReports}
      />
    </div>
  );
}

export default Medicines;
