import React, { useState } from "react";

function Option(props) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="option">
      <div
        className="question"
        onClick={handleClick}
        style={{ color: "rgb(85,85,85)" }}
      >
        {props.question}
      </div>
      <div
        className="answer"
        style={{
          display: isVisible ? "block" : "none"
        }}
      >
        <p>{props.answer1}</p>
        <p>{props.answer2}</p>
        <p>{props.answer3}</p>
      </div>
    </div>
  );
}

export default Option;
