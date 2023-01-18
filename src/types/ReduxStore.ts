import { Album } from "./Album";
import { ArrayOfAlbum } from "./ArrayOfAlbum";
import { Song } from "./Song";

export interface ReduxStore {
  content: {
    song: Song[];
  };
  songFavourite: {
    list: Song[];
  };
  selected: {
    albumSelected: Album | null;
  };
  search: { albumArray: Album[] };
  favourite: { songSelected: Song | null };
}
