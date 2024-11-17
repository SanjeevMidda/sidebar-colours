import React from "react";

const Color = () => {
  let randomNumber = () => {
    return Math.floor(Math.random() * 255);
  };

  console.log(randomNumber());

  let styles = {
    background: `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
  };

  return (
    <div className="color" style={styles}>
      <h1>{styles.background}</h1>
    </div>
  );
};

export default Color;
