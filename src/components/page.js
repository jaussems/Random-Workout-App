import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMuscleQuery, removeMuscleQuery } from "../store/exercise/action";

import ButtonComponent from "./ButtonComponent";
import MuscleImgComponent from "./muscleeimgcomponent";
import Musclegroup from "./musclegroup";
import { generateImage, generateExercise } from "../store/exercise/action";
import arnoldimg from "../arnoldstanding.png";
import {
  GetExersizes,
  GetMuscleGroups,
  GetExersizeImage,
  GetMuscleQuery,
} from "../store/exercise/selector";
import Exercise from "./Exercise";
import { generateMuscleGroups } from "../store/exercise/action";
export default function Mainpage() {
  const dispatch = useDispatch();
  const all_exercises = useSelector(GetExersizes);
  const muscle_groups = useSelector(GetMuscleGroups);
  const all_exercise_images = useSelector(GetExersizeImage);
  const image_id = all_exercises.map((img) => img.id);
  const [generate, setgenerate] = useState(false);
  const [hidden, sethidden] = useState(false);
  const [musclebtnhide, setMuscleBtnHide] = useState(false);
  const selectedQuries = useSelector(GetMuscleQuery);
  const selectednames = selectedQuries?.map((muscle) => muscle.name);
  const musclequeryId = selectedQuries?.map((muscle) => muscle.id);

  // Get image ID's to use to dispatch to an other API to get possible images
  if (generate && image_id) {
    let i = 0;
    while (i <= image_id.length) {
      dispatch(generateImage(image_id[i]));
      setgenerate(false);

      i++;
    }
  }

  useEffect(() => {
    dispatch(generateMuscleGroups());
    setgenerate(true);
    //dispatch(generateImage(115));
  }, [selectedQuries]);

  //console.log("LOGGING STATE STATUS", generate);
  return (
    <div>
      <h1>Welcome to the random exercise generator!</h1>
      <div>
        <div>
          <p>
            Musclequery selected: [{" "}
            {selectedQuries[0] ? selectednames + "," + "  " : null}]
          </p>
        </div>
        <button
          onClick={() => {
            sethidden(!hidden);
          }}
        >
          SHOW MUSCLE GROUPS
        </button>
        <div style={{ height: "2em" }}></div>

        {hidden ? (
          <div className="musclegroup-list">
            <ul className="muscle-list" style={{ marginTop: "1em" }}>
              {muscle_groups ? (
                <div>
                  {muscle_groups.map((fetched) => {
                    return (
                      <div key={fetched.id}>
                        {hidden ? (
                          <div>
                            <Musclegroup
                              name={fetched.name}
                              alternative={fetched.name}
                              imgsrc={fetched.image_url_main}
                              muscle_select={fetched.name}
                              musclequery={{
                                id: fetched.id,
                                name: fetched.name,
                              }}
                            />
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </ul>
            <div
              className="muscle-showcase"
              style={{
                backgroundImage: `url(${arnoldimg})`,
                overflow: "visible",
                zIndex: 0,
                marginTop: "-1em",
                backgroundRepeat: "no-repeat",
                height: "800px",
                width: "400px",
              }}
            >
              {muscle_groups
                ? muscle_groups.map((fetched) => {
                    return (
                      <MuscleImgComponent
                        imgsrc={fetched.image_url_main}
                        alternative={fetched.name}
                      />
                    );
                  })
                : null}
            </div>
          </div>
        ) : null}
      </div>

      <div>
        <h2>Generate your workout here!</h2>

        <ButtonComponent
          text="GENERATE"
          clicked={() => {
            dispatch(generateExercise(musclequeryId.toString()));
            setgenerate(true);
          }}
        />
      </div>
      <div>
        {all_exercises
          ? all_exercises.map((fetched) => {
              const foundimageUrl = all_exercise_images
                ?.filter((found) => found.id === fetched.id)
                .map((data) => data.imageurl);

              return (
                <div key={fetched.id}>
                  <Exercise
                    muscle={fetched.muscles}
                    name={fetched.name}
                    description={fetched.description}
                    img={foundimageUrl}
                    alt={fetched.name}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
