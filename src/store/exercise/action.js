import axios from "axios";

export const FETCH_EXERCISE = "FETCH_EXERCISE";
export const FETCH_EXERCISE_IMAGE = "FETCH_EXERCISE_IMAGE";
export const FETCH_MUSCLE_GROUPS = "FETCH_MUSCLE_GROUPS";
export const CLEAR_STATE_IMAGE = "CLEAR_STATE_IMAGE";
export const ADD_MUSCLE_QUERY = "ADD_MUSCLE_QUERY";
export const DELETE_MUSCLE_QUERY = "DELETE_MUSCLE_QUERY";
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

export const clearStateImages = () => {
  return {
    type: CLEAR_STATE_IMAGE,
    payload: null,
  };
};

export const getMusclegroup = (fetchedGroups) => {
  return {
    type: FETCH_MUSCLE_GROUPS,
    payload: fetchedGroups,
  };
};

export const addMuscleQuery = (muscle) => {
  return {
    type: ADD_MUSCLE_QUERY,
    payload: muscle,
  };
};

export const removeMuscleQuery = (muscle) => {
  return {
    type: DELETE_MUSCLE_QUERY,
    payload: muscle,
  };
};
// HTTPIE Working GET: https://wger.de/api/v2/exercise/ language=2/ "Authorization: Token 1698cdafb2a835670bbd6074c4d89c38576631f1"
//`https://wger.de/api/v2/exercise/?language=2 Authorization: Token 1698cdafb2a835670bbd6074c4d89c38576631f1
//https://wger.de/api/v2/exercise/?format=api&language=2&limit=20&muscles=2,4&offset=20 muscle query
export const generateExercise = (muscles) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `https://wger.de/api/v2/exercise/?language=2&limit=20&muscles=${muscles}&offset=${Math.floor(
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
      // console.log(
      //   "DATA I RECEIVED FROM GENERATE IMAGE ACTION:",
      //   image_response.data
      // );
      console.log("testing response:", image_response);

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
