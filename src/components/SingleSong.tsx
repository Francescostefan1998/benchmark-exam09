import { useDispatch} from "react-redux";
import { addToFavouriteSongs } from "../redux/actions";
import * as React from "react"
import { Song } from "../types/Song";
import {Component} from "react"
import { connect } from "react-redux";
import { ReduxStore } from "../types/ReduxStore";
import { fetchAlbumSong } from "../redux/actions";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";
const mapSingleSongStateToProps = (state: ReduxStore) => state

const mapSingleSongDispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchAlbumS: (query: string) => dispatch(fetchAlbumSong(query))
  
});

interface singleSongProps {
  song: Song,
  i: number
}


class SingleSong extends Component<singleSongProps> {
render(){
  return (
    <div
      /*onClick={() => dispatch(addToFavouriteSongs(song))}*/
      className="list-album"
    >
      <div className="list-left-side">
        <div></div>
        <div className="flex-column">
          <div className="gettitle">{this.props.song.title}</div>
          <div>
            
        {this.props.song.artist.name}
            <span className="id">{this.props.song.id}</span>
          </div>
        </div>
      </div>
      <div className="time-song">
        {this.props.song.duration}{/*
        {(song.duration - (song.duration %= 60)) / 60 +
          (9 < song.duration ? ":" : ":0") +
          song.duration}*/}
      </div>
    </div>
  );
}};


export default connect(mapSingleSongStateToProps, mapSingleSongDispatchToProps)(SingleSong);
