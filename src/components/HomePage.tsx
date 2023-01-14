

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyNavbar from "./MyNavbar";
import MySidebar from "./MySidebar";
import SingleAlbum from "./SingleAlbum";
import { fetchHomeSong, fetchAlbumSong } from "../redux/actions";
import { ReduxStore } from "../types/ReduxStore";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux"
import { connect } from "react-redux";
import { Component } from "react"
import { Album } from "../types/Album";
const mapHomeStateToProps = (state: ReduxStore) => state

const mapHomeDispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchHomeS: () => dispatch(fetchHomeSong("metallica"))
});
interface homePageProps {
fetchHomeS: () => void,
album: ReduxStore["selected"]
listAlbum: ReduxStore["search"]
}
interface homePageState {
  search: Album[]
  selected: Album | null
}
class HomePage extends Component<homePageProps, homePageState> {
  componentDidMount = () => {
    this.props.fetchHomeS()
console.log(this.props.album)
console.log(this.state.selected)
console.log(this.props.listAlbum)
console.log(this.state.search)

  }
//changeAlbum = (selected: Album) =>  this.setState({selected: selected})

  state: homePageState = {
    search: [],
    selected: null ,
  }
 
render() {
  return (
    <div className="main">
      <MySidebar />
      <div className="innerMain">
        <MyNavbar />
        <div>
          {this.state.search.length > 0 ? (
            <div className="row">
              <div className="col-12">
                <h4>Albums</h4>
                <div className="row" id="albums">
                  {this.state.search.map((album, i) => (
                    <SingleAlbum  album={album} key={i}/>
                  ))}
                </div>
              </div>
            </div>
          ) : <div></div>}
        </div>
      </div>
    </div>
  );
}};

export default connect(mapHomeStateToProps, mapHomeDispatchToProps)(HomePage);

