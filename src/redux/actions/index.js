export const ADD_TO_FAVOURITE_JOB = "ADD_TO_FAVOURITE_JOB";
export const ADD_TO_FAVOURITE_SONG = "ADD_TO_FAVOURITE_SONG";

export const fetchAlbumSong = () => {
  return async (dispatch, getState) => {
    console.log("fetch function triggered");
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/75621062"
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
export const addToFavouriteAction = (jobSelected) => {
  return {
    type: ADD_TO_FAVOURITE_SONG,
    payload: jobSelected,
  };
};
export const changecolor = (jobSelected) => {
  return {
    type: ADD_TO_FAVOURITE_SONG,
    payload: jobSelected,
  };
};
