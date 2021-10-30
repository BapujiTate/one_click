import React from "react";
import CardContent from "./Card-Content";
import DropDown from "./DropDown";

const groceryData = {
  groceryCall: 18605001066,
  groceryLink:
    "https://shop.bigbazaar.com/?utm_source=google&utm_medium=cpc&utm_campaign=alwayson&gclid=Cj0KCQjwt-6LBhDlARIsAIPRQcKcZypO4dn7uh36mK_5PDM1r7sm8Iejr1IEPE0MdFPJ8uRXCZzuisoaAoQaEALw_wcB"
};

const dropdownData = {
  grains: "Wheat, Rice, Oats, Cornmeal, Barley",
  driedFruits: "Almond, Apricot, Cashewnuts, Walnuts",
  cleaning: "DEtergents, Soaps, Bleach, Phenyl"
};

function Grocery() {
  return (
    <div className="card col-lg-6 col-md-12 col-sm-12" id="Grocery">
      <h1>Grocery</h1>
      <img
        src="https://i.pinimg.com/originals/14/c3/c5/14c3c5c519398e5c7f897d4ef082a8e1.jpg"
        alt=""
      />
      <p className="StylePtag">
        An online grocery store could be your last-minute saviour especially on
        days when you are unable to shop for monthly essentials because of your
        busy schedule or you cant visit shops.
      </p>
      <CardContent
        call={groceryData.groceryCall}
        link={groceryData.groceryLink}
      />
      <DropDown
        first={dropdownData.grains}
        second={dropdownData.driedFruits}
        third={dropdownData.cleaning}
      />
    </div>
  );
}

export default Grocery;
