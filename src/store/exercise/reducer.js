import { FETCH_EXERCISE } from "./action";

const initialState = {
  exercise: [],
};

export default function exerciseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EXERCISE: {
      return { ...state, exercise: action.payload };
    }

    default:
      return state;
  }
}
