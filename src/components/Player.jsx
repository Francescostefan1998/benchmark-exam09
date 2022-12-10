import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changecolor } from "../redux/actions";

const Player = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changecolor(jobSelected));
    console.log("useeffect triggered");
  }, []);
  const jobSelected = useSelector((store) => store.album.selected);
  console.log(jobSelected);
  return (
    <div>
      {jobSelected !== undefined ? (
        <div id="player">
          <div id="leftSidePlayer">
            <div id="titleSongPlayer">
              <div id="imagePlayer">
                <img src={jobSelected.album.cover} alt="image" />
              </div>
              <div id="textPlayer">
                <div>
                  <h3>{jobSelected.title}</h3>
                </div>
                <div>
                  <h6>{jobSelected.artist.name}</h6>
                </div>
              </div>
            </div>
            <div id="playButtonPlayer">
              <div id="likePlayer">w</div>
              <div id="songSlidePlayer">
                <div className="insidePlayerSlide">
                  <div>w</div>
                  <div>w</div>
                  <div>w</div>
                  <div>w</div>
                </div>
                <div className="insidePlayerSlide">
                  <div>0:10</div>
                  <div className="playback-progressbar">
                    <div className="progress--bar">
                      <div className="progress--bar-bg">
                        <div className="bg">
                          <div className="bar"></div>
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
            <div>w</div>
            <div>w</div>
            <div>w</div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Player;
