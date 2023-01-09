

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyNavbar from "./MyNavbar";
import MySidebar from "./MySidebar";
import SingleAlbum from "./SingleAlbum";
import { fetchHomeSong, fetchAlbumSong } from "../redux/actions";
import { ReduxStore } from "../types/ReduxStore";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { Component } from "react"


const mapHomeStateToProps = (state: ReduxStore) => state

const mapHomeDispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchHomeS: (query: string) => dispatch(fetchHomeSong(query))
});

class HomePage extends Component {

  state = {
    listalbum: useSelector((store: ReduxStore) => store.search )
  }

 
render() {
  return (
    <div className="main">
      <MySidebar {...mapHomeDispatchToProps()}/>
      <div className="innerMain">
        <MyNavbar {...mapHomeDispatchToProps()} />
        <div>
          {this.state.listalbum.length > 0 ? (
            <div className="row">
              <div className="col-12">
                <h4>Albums</h4>
                <div className="row" id="albums">
                  {this.state.listalbum.map((album, i) => (
                    <SingleAlbum album={album} key={i} i={i}  {...mapHomeDispatchToProps()}/>
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
