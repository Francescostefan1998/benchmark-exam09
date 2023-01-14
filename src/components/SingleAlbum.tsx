import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
  fetchAlbumS: (id: any) => dispatch(fetchAlbumSong(id))
  
});
interface SingleAlbumProps {
  album: Album 
  fetchAlbumS: (id: any) => void
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
    <div className="col-md-2">{/*onClick={async (e: any) => {
      e.preventDefault();
      await this.props.fetchAlbumS(this.props.album.id);
      console.log(e);
      await this.setState({ redirect: true });;
    }} */} <Link  onClick={(event) => this.props.fetchAlbumS(this.props.album.album.id)} to={"/albumpage/:albumId"}>
      <div className="big-card album">
        <img src={this.props.album.album.cover} alt={this.props.album.title}/>
        <h4>{this.props.album.title}</h4>
        <h5>{this.props.album.artist.name}</h5>
        <div className="time-song">
          {this.props.album.duration}
          {/*{(album.duration - (album.duration %= 60)) / 60 +
            (9 < album.duration ? ":" : ":0") +
            album.duration}*/}
        </div>
      </div></Link>
    </div>
  );
}};

export default connect(mapSingleAlbumStateToProps, mapSingleAlbumDispatchToProps )(SingleAlbum); ;
