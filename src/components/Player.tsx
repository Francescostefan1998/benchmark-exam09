import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changecolor } from "../redux/actions";
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

const Player = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToFavouriteSongs(jobSelected));
    console.log("useeffect triggered");
  }, []);
  const jobSelected = useSelector((store: ReduxStore) => store.favourite);
  console.log(jobSelected);

  const audio = new Audio(jobSelected.preview);

  const start = () => {
    audio.play();
  };
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
                          <div className="bar">{jobSelected.preview}</div>
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
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Player;
