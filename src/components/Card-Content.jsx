import React from "react";

function CardContent(props) {
  return (
    <div className="card-content">
      <p>
        Call: <a href="tel:{props.call}">{props.call}</a>
      </p>
      <p>
        Website: <a href={props.link}>Click Here</a>
      </p>
    </div>
  );
}

export default CardContent;
