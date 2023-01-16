import { AlbumSmall } from "./AlbumSmall";
import { ArtistSmall } from "./ArtistSmall";
import { data } from "./Data";
import { Song } from "./Song";

export interface Album {
  album: AlbumSmall;
  artist: ArtistSmall;
  duration: number;
  explicit_content_cover: number;
  explicit_content_lyrics: number;
  explicit_lyrics: boolean;
  id: number;
  link: string;
  md5_image: string;
  preview: string;
  rank: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  type: string;
  cover: string;
  tracks: data;
}
