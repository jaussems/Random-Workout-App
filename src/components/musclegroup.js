import React from "react";

export default function Musclegroup(props) {
  const bodyimg =
    "https://wger.de/static/images/muscles/muscular_system_front.svg";
  const muscleimg = `"https://wger.de/" + ${props.imgsrc}`;

  return (
    <div>
      <h1>{props.name}</h1>
      {/* <img
        alt={props.alternative}
        src={"https://wger.de/static/images/muscles/muscular_system_front.svg"}
      />
      <img alt={props.alternative} src={"https://wger.de/" + props.imgsrc} /> */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundImage: `url(${bodyimg})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
        }}
      >
        <img
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
          alt={props.alternative}
          src={"https://wger.de/" + props.imgsrc}
        />{" "}
      </div>
    </div>
  );
}
