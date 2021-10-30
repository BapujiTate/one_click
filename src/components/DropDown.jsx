import React from "react";

function DropDown(props) {
  return (
    <div>
      <div className="dropdown show">
        <a
          className="btn btn-secondary dropdown-toggle"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown link
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a className="dropdown-item">{props.first}</a>
          <a className="dropdown-item">{props.second}</a>
          <a className="dropdown-item">{props.third}</a>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
