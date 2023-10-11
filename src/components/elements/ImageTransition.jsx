import React, { useState } from "react";

function ImageTransition(props) {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  return (
    <div
      style={{ backgroundColor: "rgb(229,213,244)" }}
      className={`transition ${hovered ? "hovered" : ""}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <a href={props.href}>
        <img
          src={props.src}
          alt=""
          style={{
            display: hovered ? "none" : "block",
            borderRadius: "10px",
            maxWidth: "100%" // Adjust this value as needed
          }}
        />
        <div style={{ objectFit: "cover" }}>
          <h4
            style={{
              display: hovered ? "block" : "none",
              textAlign: "center",
              color: "rgb(117,123,141)",
              fontSize: "1.7rem",
              fontWeight: "bold"
            }}
          >
            {props.title}
          </h4>
          <p
            style={{
              display: hovered ? "block" : "none",

              textAlign: "center",
              color: "rgb(117,123,141)",
              fontSize: "1rem",
              marginTop: "-1.3rem",
              marginBottom: "-1.2rem"
            }}
          >
            made with
          </p>
          <p
            style={{
              display: hovered ? "block" : "none",

              textAlign: "center",
              color: "rgb(117,123,141)",
              fontSize: "1.5rem"
            }}
          >
            {props.description}
          </p>
        </div>
      </a>
    </div>
  );
}

export default ImageTransition;
