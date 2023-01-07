import { useDispatch} from "react-redux";
import { addToFavouriteSongs } from "../redux/actions";
import * as React from "react"
import { Song } from "../types/Song";
interface singleSongProps {
  song: Song
  i: number
}
const SingleSong = ({ song, i }: singleSongProps) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(addToFavouriteSongs(song))}
      className="list-album"
      key={i}
    >
      <div className="list-left-side">
        <div>{i + 1}</div>
        <div className="flex-column">
          <div className="gettitle">{song.title}</div>
          <div>
            {song.artist.name}
            <span className="id">{song.id}</span>
          </div>
        </div>
      </div>
      <div className="time-song">
        {song.duration}
        {/*{(song.duration - (song.duration %= 60)) / 60 +
          (9 < song.duration ? ":" : ":0") +
          song.duration}*/}
      </div>
    </div>
  );
};

export default SingleSong;
