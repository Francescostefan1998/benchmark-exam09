import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAlbumSong } from "../redux/actions";
import * as React from "react"
import { ThunkDispatch } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";
import { Album } from "../types/Album";
import {Component} from "react"
import { connect } from "react-redux";
import { ReduxStore } from "../types/ReduxStore";


const mapSingleAlbumStateToProps = (state: ReduxStore) => state

const mapSingleAlbumDispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchAlbumS: () => dispatch(fetchAlbumSong("7856445"))
  
});
interface SingleAlbumProps {
  album: Album 
}

class SingleAlbum extends Component<SingleAlbumProps> { 
  /*const handleSubmit = async (e: any) => {
    e.preventDefault();
    props.fetchAlbumS(props.album.album.id);
    console.log(e);
    navigate("/albumpage/:albumId");
  };*/
  render(){
  return (
    <div className="col-md-2" /*onClick={handleSubmit}*/>
      <div className="big-card album">
        <img /*src=props.album.album.cover alt=props.album.title*/ />
        <h4>{/*props.album.title*/}</h4>
        <h5>{this.props.album.title}</h5>
        <div className="time-song">
          {/*props.album.duration*/}
          {/*  {(album.duration - (album.duration %= 60)) / 60 +
            (9 < album.duration ? ":" : ":0") +
            album.duration}*/}
        </div>
      </div>
    </div>
  );
}};

export default connect(mapSingleAlbumStateToProps, mapSingleAlbumDispatchToProps )(SingleAlbum); ;
