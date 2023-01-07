import MyNavbar from "./MyNavbar";
import MySidebar from "./MySidebar";
import { fetchAlbumSong } from "../redux/actions";
import SingleSong from "./SingleSong";
import { ReduxStore } from "../types/ReduxStore";
import { Album } from "../types/Album";
import * as React from "react"
import { ThunkDispatch } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";
import { fetchHomeSong } from "../redux/actions";
import {useEffect} from "react"
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';
type AlbumProps = {
  album: Album | null
  fetchAlbumS: (argument: string) => void
  listsong: ReduxStore["content"]
  album1: ReduxStore["selected"]
  fetchHomeS: (argument: string) => void
}

const mapDispatchToProp = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchHomeS: (query: string) => dispatch(fetchHomeSong(query)),
});
const mapdispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchHomeS: (query: string) => dispatch(fetchHomeSong(query)),
});


const mapStateToProps = (state: ReduxStore) => state
const mapDispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchAlbumS: () => dispatch(fetchAlbumSong("metallica"))
})
const AlbumPage = (props: AlbumProps) =>  {
  /* const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(changecolor(e));
  }; */
  const dispatch = useDispatch();
  
  useEffect(() => {
    props.fetchAlbumS("dd");
    console.log("useeffect triggered");
  }, []);


  return (
    <div className="main">
      <MySidebar {...mapDispatchToProp(dispatch)}/>
      
      <div className="innerMain">
      <MyNavbar {...mapdispatchToProps(dispatch)} />
        
        <div className="behind-nav">
          <div className="content">
            <div id="album-header">
              <div id="cover-black"></div>
              <div className="row" id="album-title-image">
                <div className="col-12 col-md-4 col-lg-3" id="album-image">
                  {props.album && <img
                    src={props.album.album.cover}
                    alt="album-image"
                    id="header-img"
                  />}
                </div>
                <div
                  className="col-12 col-md-8 col-lg-8"
                  id="album-title"
                ></div>
              </div>
            </div>
            <div id="bigger-container">
              <div id="background-pink"></div>

              <div id="inner-top-container">
                <div id="play-button">
                  <div id="play-symbol"></div>
                </div>
                <div id="faheart">
                  <i className="fa-regular fa-heart"></i>
                </div>

                <div id="settings">
                  <i className="fa-solid fa-ellipsis"> </i>

                  <div className="dropdown-settings" id="appear">
                    <div className="row">
                      <div className="col-4">Follow</div>
                      <div className="col-2">
                        <a href=""> </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-10" id="go-artist">
                        <a href="artistFinish.html">Go to Artist page</a>
                      </div>
                      <div className="col-2">
                        <a href=""> </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">Link</div>
                      <div className="col-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-box-arrow-up-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                            />
                          </svg>
                        
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">Share</div>
                      <div className="col-2">
                        <a href="">
                          <i className="fa-solid fa-caret-right"></i>{" "}
                        </a>
                      </div>
                    </div>

                    <hr className="hrr" />

                    <div className="row">
                      <div className="col-12">Open with desktop app</div>
                      <div className="col-0">
                        <a href=""> </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="inner-container">
                <div id="list-song-section">
                  <div id="subtitle">
                    <div>#</div>
                    <div>TITLE</div>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-clock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                  </div>
                </div>
                <hr id="hr" />
                <ul id="ordered-list-album"></ul>
              </div>
            </div>
          </div>
        </div>
        {props.album && (<div>
          <h2>Album</h2>

          {props.listsong.map((song, i) => (
            <SingleSong song={song} key={i} i={i} />
          ))}
        </div>)}
      </div>
    </div>
  );
}

export default AlbumPage;
