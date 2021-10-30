import React from "react";
import CardContent from "./Card-Content";
import DropDown from "./DropDown";

const dailyNeedsData = {
  dailyNeedsCall: 180030009009,
  dailyNeedsLink: "https://www.amazon.in/Daily-Needs/s?k=Daily+Needs"
};

const dropdownData = {
  newsPaper: "News Paper",
  milk: "Milk, Butter, Brade",
  vegetables: "Vegetables"
};

function DailyNeeds() {
  return (
    <div className="card col-lg-6 col-md-12 col-sm-12" id="Daily-needs">
      <h1>DailyNeeds</h1>
      <img
        src="https://thumbs.dreamstime.com/b/groceries-23958998.jpg"
        alt=""
      />
      <p className="StylePtag">
        Shop online for fresh vegetables and fruits and get your order delivered
        at your doorstep in 10 minutes. Enjoy instant delivery with Daily Needs.
      </p>
      <CardContent
        call={dailyNeedsData.dailyNeedsCall}
        link={dailyNeedsData.dailyNeedsLink}
      />
      <DropDown
        first={dropdownData.newsPaper}
        second={dropdownData.milk}
        third={dropdownData.vegetables}
      />
    </div>
  );
}

export default DailyNeeds;
