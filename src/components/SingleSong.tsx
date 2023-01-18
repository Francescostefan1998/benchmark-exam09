import { useDispatch} from "react-redux";
import { addToFavouriteSongs, addToFavouriteSongsList } from "../redux/actions";
import * as React from "react"
import { Song } from "../types/Song";
import {Component} from "react"
import { connect } from "react-redux";
import { ReduxStore } from "../types/ReduxStore";
import { fetchAlbumSong } from "../redux/actions";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";
import { BsSuitHeartFill } from "react-icons/bs"
import { BsSuitHeart } from "react-icons/bs"
const mapSingleSongStateToProps = (state: ReduxStore) => {
  return {
    songSelected: state.favourite,
    songLiked: state.songFavourite
   }}


const mapSingleSongDispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchAlbumS: (query: Song) => dispatch(addToFavouriteSongs(query)),
  addToListS: (query: Song) => dispatch(addToFavouriteSongsList(query))
  
});

interface singleSongProps {
  fetchAlbumS: (song: Song) => void,
  addToListS: (song: Song) => void,
  song: Song,
  i: number,
  songSelected: ReduxStore["favourite"],
  songLiked: ReduxStore["songFavourite"]
}

interface singleSongState {
  songSelected: Song | null,
songLikedState: Song | null,
liked: boolean
}

class SingleSong extends Component<singleSongProps, singleSongState> {

state: singleSongState = {
  songLikedState: null,
  songSelected: null,
  liked: false
}

  componentDidUpdate(prevProps: any) {
    if (this.props.songSelected.songSelected !== prevProps.songSelected.songSelected ) {
      this.setState({songSelected: this.props.song
      });
    }
  }
render(){
  return (<div className="flex-row">
    <div onClick={(e) => {this.props.addToListS(this.props.song); {this.state.liked === false ? this.setState({liked: true}) : this.setState({liked: false})}}}>{this.state.liked === true ? <BsSuitHeartFill/> : <BsSuitHeart/>}</div>

    <div
      onClick={() => this.props.fetchAlbumS(this.props.song)}
      className="list-album col-12"
    >
      <div className="list-left-side">
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
    </div></div>
  );
}};


export default connect(mapSingleSongStateToProps, mapSingleSongDispatchToProps)(SingleSong);
