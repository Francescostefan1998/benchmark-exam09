import {useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { BiShuffle } from "react-icons/bi";
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";
import { BsListUl } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { addToFavouriteSongs } from "../redux/actions";
import * as React from "react"
import { ReduxStore } from "../types/ReduxStore";
import { connect } from "react-redux";
import { Component } from "react"
import { fetchHomeSong } from "../redux/actions";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";


const mapPlayerStateToProps = (state: ReduxStore) => {
  return {
    song: state.favourite
 }}

const mapPlayerDispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchHomeS: (query: string) => dispatch(fetchHomeSong(query))
});

interface playerProps{
  song: ReduxStore["favourite"]
}
let audio = new Audio

const start = () => {
  
      audio.play();
    };
class Player extends Component<playerProps> {
/*  useEffect(() => {
    dispatch(addToFavouriteSongs(jobSelected));
    console.log("useeffect triggered");
  }, []);
  const jobSelected = useSelector((store: ReduxStore) => store.favourite);
  console.log(jobSelected);

  
if(jobSelected !== null){
}*/
 
  componentDidUpdate(prevProps: any) {
    if (this.props.song.songSelected !== prevProps.song.songSelected) {
      this.setState({songSelected: this.props.song.songSelected
}); if (this.props.song.songSelected !== null)
audio = new Audio(this.props.song.songSelected.preview);

    }
  }
  render(){
  return (
    <div>
      
        <div id="player">
          <div id="leftSidePlayer">
            <div id="titleSongPlayer">
              <div id="imagePlayer">
               <img src={this.props.song.songSelected?.album.cover} alt="image" />
              </div>
              <div id="textPlayer">
                <div>
                  <h6>{this.props.song.songSelected?.title}</h6>
                </div>
                <div>
                  <h6>{this.props.song.songSelected?.artist.name}</h6>
                </div>
              </div>
            </div>
            <div id="playButtonPlayer">
              <div id="likePlayer">
                <FaHeart />
              </div>
              <div id="songSlidePlayer">
                <div className="insidePlayerSlide">
                  <div>
                    <BiShuffle />
                  </div>
                  <div>
                    <AiFillStepBackward />
                  </div>
                  <div>
                    <button onClick={start}>Play</button>
                  </div>
                  <div>
                    <AiFillStepForward />
                  </div>
                </div>
                <div className="insidePlayerSlide">
                  <div>0:10</div>
                  <div className="playback-progressbar">
                    <div className="progress--bar">
                      <div className="progress--bar-bg">
                        <div className="bg">
                          <div className="bar">{this.props.song.songSelected?.preview}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>3:10</div>
                </div>
              </div>
            </div>
          </div>
          <div id="rightSidePlayer">
            <div>
              <BsListUl />
            </div>
            <div>
              <MdOutlineComputer />
            </div>
            <div>
              <BsFillVolumeUpFill />
            </div>
          </div>
        </div>
      
    </div>
  );
}};

export default connect(mapPlayerStateToProps, mapPlayerDispatchToProps )(Player); ;
