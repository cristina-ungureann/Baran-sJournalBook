import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Percentage(props) {
  const percentage = props.percentage;
  return (
    <div className="container skill-item">
      <CircularProgressbar
        value={props.percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: `rgba(234,106,147, ${percentage / 80})`,
          textColor: "#EA6A93",
          trailColor: "#EA6A9",
          backgroundColor: "#EA6A93"
        })}
      ></CircularProgressbar>
      <h2>{props.skill}</h2>
    </div>
  );
}

export default Percentage;
