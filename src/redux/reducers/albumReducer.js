import { ADD_TO_FAVOURITE_JOB, ADD_TO_FAVOURITE_SONG } from "../actions";

const initialState = {
  content: [],
  selected: null,
};
console.log(initialState.selected);
const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE_JOB:
      return {
        ...state,

        content: action.payload,
      };
    case ADD_TO_FAVOURITE_SONG:
      return {
        ...state,

        selected: action.payload,
      };
    default:
      return state;
  }
};
export default albumReducer;
