import {
  ADD_TO_FAVOURITE_JOB,
  ADD_TO_FAVOURITE_SONG,
  SEARCH_SONG,
  ADD_TO_FAVOURITE_SONG_SINGLE,
} from "../actions";

const initialState = {
  content: [],
  selected: null,
  search: [],
  favourite: null,
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
    case SEARCH_SONG:
      return {
        ...state,

        search: action.payload,
      };
    case ADD_TO_FAVOURITE_SONG_SINGLE:
      return {
        ...state,

        favourite: action.payload,
      };
    default:
      return state;
  }
};
export default albumReducer;
