import { Album } from "./Album";
import { ArrayOfAlbum } from "./ArrayOfAlbum";
import { Song } from "./Song";

export interface ReduxStore {
  content: {
    song: Song[];
  };
  selected: {
    albumSelected: Album | null;
  };
  search: { albumArray: Album[] };
  favourite: { songSelected: Album | null };
}
