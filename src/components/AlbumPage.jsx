import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import MySidebar from "./MySidebar";
import { fetchAlbumSong } from "../redux/actions";
import { changecolor } from "../redux/actions";
import SingleSong from "./SingleSong";
import SingleAlbum from "./SingleAlbum";
const AlbumPage = () => {
  const dispatch = useDispatch();
  /* const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(changecolor(e));
  }; */

  useEffect(() => {
    dispatch(fetchAlbumSong("metallica"));
    console.log("useeffect triggered");
  }, []);
  const listsong = useSelector((store) => store.album.content);
  const album = useSelector((store) => store.album.selected);
  return (
    <div className="main">
      <MySidebar />
      <div className="innerMain">
        <MyNavbar />
        <div>
          <div className="content">
            <div id="album-header">
              <div id="cover-black"></div>
              <div className="row" id="album-title-image">
                <div className="col-12 col-md-4 col-lg-3" id="album-image">
                  <img
                    src="https://th.bing.com/th/id/R.a2f49ea2346ade619ae7d782dd9f0724?rik=Le%2fIgHdoQ%2f%2bJtQ&riu=http%3a%2f%2fthatgrapejuice.net%2fwp-content%2fuploads%2f2018%2f04%2fcardi-b-tracklist-invasion-of-privacy-tgj-600x600.jpg&ehk=X4s%2b%2bJrijOhD6kU2GyXFZAwb%2fTnpoTsLWI4tuwBwZFE%3d&risl=&pid=ImgRaw&r=0"
                    alt="album-image"
                    id="header-img"
                  />
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
                <div id="play-button" onclick="changeplay(event)">
                  <div id="play-symbol"></div>
                </div>
                <div onclick="like(event)" id="faheart">
                  <i className="fa-regular fa-heart"></i>
                </div>

                <div id="settings" onclick="setting(event)">
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
                        <a href="">
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
                        </a>
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
        <div>
          <h2>Album</h2>
          <SingleAlbum album={album} />

          {listsong.map((song, i) => (
            <SingleSong song={song} key={i} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
