import { generateExercise, clearStateImages } from "../store/exercise/action";
import { useDispatch } from "react-redux";

const ButtonComponent = (props) => {
  //const dispatch = useDispatch();

  // <button
  //       onClick={() => {
  //         dispatch(generateExercise());
  //       }}
  //     ></button>

  return (
    <>
      <button onClick={props.clicked}>{props.text}</button>
    </>
  );
};

export default ButtonComponent;
