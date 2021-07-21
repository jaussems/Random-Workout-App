import React from "react";
import "./musclegroup.css";
export default function Musclegroup(props) {
  const bodyimg =
    "https://wger.de/static/images/muscles/muscular_system_front.svg";
  const muscleimg = "https://wger.de" + `${props.imgsrc}`;
  // const bodyimg =
  //   "../../arnold-schwarzenegger-pumping-iron-ss20-removebg-preview.png";

  //Backup

  //   <div>
  //   <h1>{props.name}</h1>

  //   <div
  //     style={{
  //       display: "flex",
  //       justifyContent: "center",
  //       backgroundImage: `url(${bodyimg})`,
  //       backgroundPosition: "center",
  //       backgroundSize: "contain",
  //       backgroundRepeat: "no-repeat",
  //       height: "100vh",
  //       width: "100%",
  //     }}
  //   >
  //     <img
  //       style={{
  //         marginLeft: "auto",
  //         marginRight: "auto",
  //       }}
  //       alt={props.alternative}
  //       src={"https://wger.de/" + props.imgsrc}
  //     />{" "}
  //   </div>
  // </div>

  // <div
  //         style={{
  //           marginLeft: "auto",
  //           marginRight: "auto",

  //           backgroundImage: `url(${muscleimg})`,
  //           position: "fixed",
  //           zIndex: 2,
  //         }}
  //       ></div>

  return (
    <div className="musclegroupcontainer">
      <div className="muscle-selector">
        <ul>
          <li>{props.muscle_select}</li>
          <button type="checkbox">💪</button>
        </ul>
      </div>
      <h1 className="muscletext" style={{ display: "none" }}>
        {props.name}
      </h1>
      <img
        className="muscleImgitem"
        alt={props.alternative}
        src={"https://wger.de/" + props.imgsrc}
      />{" "}
    </div>
  );
}
