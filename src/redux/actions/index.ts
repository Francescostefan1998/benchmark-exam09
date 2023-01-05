import { Dispatch } from "@reduxjs/toolkit";
import { Album } from "../../types/Album";
import { ReduxStore } from "../../types/ReduxStore";
import { Song } from "../../types/Song";

export const ADD_TO_FAVOURITE_JOB = "ADD_TO_FAVOURITE_JOB";
export const ADD_TO_FAVOURITE_SONG = "ADD_TO_FAVOURITE_SONG";
export const SEARCH_SONG = "SEARCH_SONG";
export const ADD_TO_FAVOURITE_SONG_SINGLE = "ADD_TO_FAVOURITE_SONG_SINGLE";
export const fetchAlbumSong = (query) => {
  return async (dispatch: Dispatch, getState: () => ReduxStore) => {
    console.log("fetch function triggered");
    try {
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${query}`
      );
      console.log(resp);
      if (resp.ok) {
        let fetchedalbum = await resp.json();
        console.log(fetchedalbum.tracks.data);
        let data = fetchedalbum.tracks.data;
        console.log(data);
        dispatch({
          type: ADD_TO_FAVOURITE_JOB,
          payload: data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const addToFavouriteAction = (jobSelected: Album) => {
  return {
    type: ADD_TO_FAVOURITE_SONG,
    payload: jobSelected,
  };
};
export const changecolor = (jobSelected: Album) => {
  return {
    type: ADD_TO_FAVOURITE_SONG,
    payload: jobSelected,
  };
};
export const addToFavouriteSongs = (song: Song) => {
  return {
    type: ADD_TO_FAVOURITE_SONG_SINGLE,
    payload: song,
  };
};

export const fetchHomeSong = (query: string) => {
  return async (dispatch: Dispatch, getState: () => ReduxStore) => {
    console.log("fetch function triggered");
    try {
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );
      console.log(resp);
      if (resp.ok) {
        let fetchedalbum = await resp.json();
        console.log(fetchedalbum.data);
        let data = fetchedalbum.data;
        console.log(data);
        dispatch({
          type: SEARCH_SONG,
          payload: data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
