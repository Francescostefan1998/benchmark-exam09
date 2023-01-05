import { Album } from "./Album";
import { ArrayOfAlbum } from "./ArrayOfAlbum";
import { Song } from "./Song";

export interface ReduxStore {
  content: Song[];
  selected: Album | null;
  search: Album[];
  favourite: Album | null;
}
