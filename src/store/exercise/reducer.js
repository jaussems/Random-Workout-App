import {
  FETCH_EXERCISE,
  FETCH_MUSCLE_GROUPS,
  FETCH_EXERCISE_IMAGE,
  CLEAR_STATE_IMAGE,
} from "./action";

const initialState = {
  exercise: [],
  musclegroups: [],
  exercise_image: [],
};

// case FETCH_EXERCISE_IMAGE: {
//   const image = state.exercise_image.filter(
//     (allImages) => allImages.id === action.payload.id
//   );

//   return {
//     ...state,
//     exercise_image: [
//       ...state.exercise_image,
//       {
//         id: action.payload.images.id,
//         imageurl: action.payload.images.image,
//       },
//     ],
//   };
// }

export default function exerciseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EXERCISE: {
      return { ...state, exercise: action.payload };
    }
    case FETCH_EXERCISE_IMAGE: {
      const image = state.exercise_image.filter(
        (allImages) => allImages.id === action.payload.id
      );

      return {
        ...state,
        exercise_image: [
          ...state.exercise_image,
          {
            id: action.payload.images.id,
            imageurl: action.payload.images.image,
            uuid: action.payload.images.uuid,
          },
        ],
      };
    }

    case FETCH_MUSCLE_GROUPS: {
      return { ...state, musclegroups: action.payload };
    }

    case CLEAR_STATE_IMAGE: {
      return state;
    }
    default:
      return state;
  }
}
