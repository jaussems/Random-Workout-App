import axios from "axios";

export const FETCH_EXERCISE = "FETCH_EXERCISE";
export const FETCH_EXERCISE_IMAGE = "FETCH_EXERCISE_IMAGE";
export const FETCH_MUSCLE_GROUPS = "FETCH_MUSCLE_GROUPS";
//const auth = "Authorization: Token 1698cdafb2a835670bbd6074c4d89c38576631f1";

//let random = Math.floor(Math.random() * 10);

export const getExercise = (fetchedExercise) => {
  return {
    type: FETCH_EXERCISE,
    payload: fetchedExercise,
  };
};

export const getImages = (images) => {
  return {
    type: FETCH_EXERCISE_IMAGE,
    payload: { images },
  };
};

export const getMusclegroup = (fetchedGroups) => {
  return {
    type: FETCH_MUSCLE_GROUPS,
    payload: fetchedGroups,
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

      dispatch(getExercise(response.data.results));
    } catch (e) {
      console.log("ERROR MESSAGE", e.message);
    }
  };
};

export const generateImage = (id) => {
  return async (dispatch, getState) => {
    try {
      const image_response = await axios.get(
        `https://wger.de/api/v2/exerciseimage/${id}`,
        {
          headers: {
            Authorization: "Token 1698cdafb2a835670bbd6074c4d89c38576631f1",
          },
        }
      );

      dispatch(getImages(image_response.data));
    } catch (e) {
      console.log("ERROR MESSAGE", e.message);
    }
  };
};

export const generateMuscleGroups = () => {
  return async (dispatch, getState) => {
    try {
      const muscleresponse = await axios.get(`https://wger.de/api/v2/muscle/`, {
        headers: {
          Authorization: "Token 1698cdafb2a835670bbd6074c4d89c38576631f1",
        },
      });

      dispatch(getMusclegroup(muscleresponse.data.results));
    } catch (e) {
      console.log("ERROR MESSAGE", e.message);
    }
  };
};
