import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import ButtonComponent from "../components/ButtonComponent";
import Musclegroup from "../components/musclegroup";
import { generateImage } from "../store/exercise/action";

import {
  GetExersizes,
  GetMuscleGroups,
  GetExersizeImage,
} from "../store/exercise/selector";
import Exercise from "../components/Exercise";
import { generateMuscleGroups } from "../store/exercise/action";
export default function Mainpage() {
  const dispatch = useDispatch();
  const all_exercises = useSelector(GetExersizes);
  const muscle_groups = useSelector(GetMuscleGroups);
  const all_exercise_images = useSelector(GetExersizeImage);
  const image_id = all_exercises.map((img) => img.id);

  const [hidden, sethidden] = useState(false);

  if (image_id) {
    let i = 0;
    while (i <= image_id.length) {
      const checkingarray = all_exercise_images.some(
        (element) => element.id === image_id[i]
      );
      if (!checkingarray) {
        dispatch(generateImage(image_id[i]));
      }

      i++;
    }
  }
  // Dispatch action to generate exercise images

  useEffect(() => {
    dispatch(generateMuscleGroups());
  }, []);

  return (
    <div>
      <h1>Welcome to the random exercise generator!</h1>
      <div>
        <button
          onClick={() => {
            sethidden(!hidden);
          }}
        >
          SHOW MUSCLE GROUPS
        </button>
        {muscle_groups ? (
          <div>
            {muscle_groups.map((fetched) => {
              return (
                <div key={fetched.id}>
                  {hidden ? (
                    <Musclegroup
                      name={fetched.name}
                      alternative={fetched.name}
                      imgsrc={fetched.image_url_main}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div>
        <h2>Generate your workout here!</h2>
        <ButtonComponent text="GENERATE" />
      </div>
      <div>
        {all_exercises
          ? all_exercises.map((fetched) => {
              return (
                <div key={fetched.id}>
                  <Exercise
                    muscle={fetched.muscles}
                    name={fetched.name}
                    description={fetched.description}
                    img={null}
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
