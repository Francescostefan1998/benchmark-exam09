import {
  ADD_TO_FAVOURITE_JOB,
  ADD_TO_FAVOURITE_SONG,
  SEARCH_SONG,
  ADD_TO_FAVOURITE_SONG_SINGLE,
} from "../actions";
import { Album } from "../../types/Album";
import { ArrayOfAlbum } from "../../types/ArrayOfAlbum";
import { Song } from "../../types/Song";
import { ReduxStore } from "../../types/ReduxStore";
import { AnyAction } from "redux";
const initialState: ReduxStore = {
  content: [],
  selected: null,
  search: [],
  favourite: null,
};
console.log(initialState.selected);
const albumReducer = (state = initialState, action: AnyAction) => {
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
