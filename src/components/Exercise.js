import React from "react";

const Exercise = (props) => {
  return (
    <div>
      <h1>{props.muscle}</h1>
      <h2>{props.name}</h2>
      <img alt={props.alt} src={props.img} />
      <span>{props.description}</span>
    </div>
  );
};

export default Exercise;
