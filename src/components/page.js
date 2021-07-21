import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ButtonComponent from "./ButtonComponent";
import Musclegroup from "./musclegroup";
import { generateImage, generateExercise } from "../store/exercise/action";
import arnoldimg from "../arnold-schwarzenegger-pumping-iron-ss20-removebg-preview.png";
import {
  GetExersizes,
  GetMuscleGroups,
  GetExersizeImage,
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

  //console.log(image_id);
  // Get image ID's to use to dispatch to the API to get possible images
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
  }, []);

  //console.log("LOGGING STATE STATUS", generate);
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
        {hidden ? (
          <div
            style={{
              backgroundImage: `url(${arnoldimg})`,
              position: "absolute",
              left: "1em",
              margin: "0 auto",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: 0,
              backgroundSize: "contain",
              height: "100vh",
              width: "100%",
            }}
          >
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
                          />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      {/* <div
        style={{
          display: "block",
          justifyContent: "center",
          backgroundImage: `url(${arnoldimg})`,
          zIndex: 1,
          backgroundPosition: "",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
        }}
      ></div> */}

      <div>
        <h2>Generate your workout here!</h2>

        <ButtonComponent
          text="GENERATE"
          clicked={() => {
            dispatch(generateExercise());
            setgenerate(true);
          }}
        />
      </div>
      <div>
        {all_exercises
          ? all_exercises.map((fetched) => {
              const foundimage = all_exercise_images
                ?.filter((found) => found.id === fetched.id)
                .map((data) => data.imageurl);

              return (
                <div key={fetched.id}>
                  <Exercise
                    muscle={fetched.muscles}
                    name={fetched.name}
                    description={fetched.description}
                    img={foundimage}
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
