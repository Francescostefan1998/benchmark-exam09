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
const mapSingleSongStateToProps = (state: ReduxStore) => {
  return {
    songSelected: state.favourite,
   }}


const mapSingleSongDispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchAlbumS: (query: Song) => dispatch(addToFavouriteSongs(query))
  
});

interface singleSongProps {
  fetchAlbumS: (song: Song) => void
  song: Song,
  i: number,
  songSelected: ReduxStore["favourite"]
}


class SingleSong extends Component<singleSongProps> {
  componentDidUpdate(prevProps: any) {
    if (this.props.songSelected.songSelected !== prevProps.songSelected.songSelected) {
      this.setState({songSelected: this.props.song
      });
    }
  }
render(){
  return (
    <div
      onClick={() => this.props.fetchAlbumS(this.props.song)}
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
