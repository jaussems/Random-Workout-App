import axios from "axios";

export const generateExercise = () => {
  return async (dispatch, getState) => {
    try {
      const response = axios.get(
        "https://wger.de/api/v2/exercise/ langauge==2.json/ Authorization: Token 1698cdafb2a835670bbd6074c4d89c38576631f1"
      );
    } catch (e) {
      console.log("ERROR MESSAGE", e.message);
    }
  };
};
