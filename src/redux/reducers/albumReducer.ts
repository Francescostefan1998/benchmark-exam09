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
import { initialState } from "../store";

export const contentReducer = (
  state = initialState.content,
  action: AnyAction
) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE_JOB:
      return {
        ...state,

        song: action.payload,
      };
    default:
      return state;
  }
};

export const selectedReducer = (
  state = initialState.selected,
  action: AnyAction
) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE_SONG:
      return {
        ...state,

        albumSelected: action.payload,
      };
    default:
      return state;
  }
};
export const searchReducer = (
  state = initialState.search,
  action: AnyAction
) => {
  switch (action.type) {
    case SEARCH_SONG:
      return {
        ...state,

        albumArray: action.payload,
      };
    default:
      return state;
  }
};
export const favouriteReducer = (
  state = initialState.favourite,
  action: AnyAction
) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE_SONG_SINGLE:
      return {
        ...state,

        songSelected: action.payload,
      };
    default:
      return state;
  }
};
