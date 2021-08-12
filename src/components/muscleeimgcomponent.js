import React from "react";

function muscleImgComponent(props) {
  return (
    <>
      <img
        className="muscleImgitem2"
        alt={props.alternative}
        src={"https://wger.de/" + props.imgsrc}
      />
    </>
  );
}
export default muscleImgComponent;
