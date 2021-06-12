import { generateExercise } from "../store/exercise/action";
import { useDispatch } from "react-redux";

const ButtonComponent = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(generateExercise())}>{props.text}</button>
    </>
  );
};

export default ButtonComponent;
