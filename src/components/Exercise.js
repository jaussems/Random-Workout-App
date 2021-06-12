import React from "react";

const Exercise = (props) => {
  return (
    <div>
      <h1>{props.muscle}</h1>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Exercise;
