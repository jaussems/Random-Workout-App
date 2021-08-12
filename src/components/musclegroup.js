import React, { useState } from "react";
import { addMuscleQuery, removeMuscleQuery } from "../store/exercise/action";

import { useSelector, useDispatch } from "react-redux";
import "./musclegroup.css";
export default function Musclegroup(props) {
  const dispatch = useDispatch();
  const bodyimg =
    "https://wger.de/static/images/muscles/muscular_system_front.svg";
  const muscleimg = "https://wger.de" + `${props.imgsrc}`;

  const [musclebtn, setmusclebtn] = useState({
    hideimg: true,
    btnstatus: false,
  });

  function changeState() {
    setmusclebtn({
      hideimg: !musclebtn.hideimg,
      btnstatus: !musclebtn.btnstatus,
    });
    if (musclebtn.btnstatus === false) {
      dispatch(addMuscleQuery(props.musclequery));
    } else dispatch(removeMuscleQuery(props.musclequery));
  }

  return (
    <>
      <li className="muscle-selector">
        {props.muscle_select}

        <h1 className="muscletext" style={{ display: "none" }}>
          {props.name}
        </h1>
        <button type="checkbox" onClick={changeState}>
          {musclebtn.btnstatus ? "💪" : "💪🏻"}
        </button>
      </li>
    </>
  );
}
