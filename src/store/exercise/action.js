import axios from "axios";

export const FETCH_EXERCISE = "FETCH_EXERCISE";

//const auth = "Authorization: Token 1698cdafb2a835670bbd6074c4d89c38576631f1";

//let random = Math.floor(Math.random() * 10);

export const getExercise = (fetchedExercise) => {
  return {
    type: FETCH_EXERCISE,
    payload: fetchedExercise,
  };
};

// HTTPIE Working GET: https://wger.de/api/v2/exercise/ language=2/ "Authorization: Token 1698cdafb2a835670bbd6074c4d89c38576631f1"
//`https://wger.de/api/v2/exercise/?language=2 Authorization: Token 1698cdafb2a835670bbd6074c4d89c38576631f1

export const generateExercise = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `https://wger.de/api/v2/exercise/?language=2&limit=20&offset=${Math.floor(
          Math.random() * 10
        )}`,
        {
          headers: {
            Authorization: "Token 1698cdafb2a835670bbd6074c4d89c38576631f1",
          },
        }
      );

      console.log("RESPONSE I GOT:", response.data.results);
      dispatch(getExercise(response.data.results));
    } catch (e) {
      console.log("ERROR MESSAGE", e.message);
    }
  };
};
