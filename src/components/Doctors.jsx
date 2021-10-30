import React from "react";
import CardContent from "./Card-Content";
import DropDown from "./DropDown";

const doctorsData = {
  doctorsCall: 18605001066,
  doctorsLink:
    "https://apolloadmin.askapollo.com/apolloleads/apolloconsultleads?utm_source=google&utm_medium=cpc&utm_campaign=TM_Search_Brand_Hospital_India&utm_content=Brand&utm_source=paid&utm_medium=googleads&utm_campaign=14660991300&utm_adgroup=125941763743&utm_term=apollo%20hospital&creative=546287691539&device=c&devicemodel=&matchtype=e&feeditemid=&targetid=kwd-1152751502&network=g&placement=&adposition=&GA_loc_interest_ms=&GA_loc_physical_ms=1007786&gclid=Cj0KCQjwt-6LBhDlARIsAIPRQcIjs1blbHl21AJ4xNtN1z7glVWMaej-S0q-Zo2wDv3PJ4bCcm993yIaAiIUEALw_wcB"
};

const dropdownData = {
  doctor: "Doctors Consult",
  nurse: "Nurse Consult",
  caretaker: "Caretaker"
};

function Doctors() {
  return (
    <div className="card col-lg-6 col-md-12 col-sm-12" id="Doctors">
      <h1>Your Doctor</h1>
      <img
        src="https://as2.ftcdn.net/v2/jpg/02/60/04/09/500_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
        alt=""
      />
      <p className="StylePtag">
        Get the Best Guidance for Any Health Issue with Instant Online Doctor
        Consultation. Instant Consultation Available 24/7 with No Appointment
        Booking Needed. Consult Now!
      </p>
      <CardContent
        call={doctorsData.doctorsCall}
        link={doctorsData.doctorsLink}
      />
      <DropDown
        first={dropdownData.doctor}
        second={dropdownData.nurse}
        third={dropdownData.caretaker}
      />
    </div>
  );
}

export default Doctors;
