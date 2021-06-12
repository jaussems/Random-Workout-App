import React from "react";
import { useSelector } from "react-redux";
import ButtonComponent from "../components/ButtonComponent";
import { GetExersizes } from "../store/exercise/selector";
import Exercise from "../components/Exercise";

export default function Mainpage() {
  const all_exercises = useSelector(GetExersizes);
  console.log("Exercises from state:", all_exercises);
  return (
    <div>
      <h1>Welcome to the main page</h1>
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
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
