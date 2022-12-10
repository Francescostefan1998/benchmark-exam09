import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import MySidebar from "./MySidebar";
import { fetchHomeSong } from "../redux/actions";
import SingleAlbum from "./SingleAlbum";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeSong());
    console.log("useeffect triggered");
  }, []);
  const listalbum = useSelector((store) => store.album.search);

  return (
    <div className="main">
      <MySidebar />
      <div className="innerMain">
        <MyNavbar />
        <div>
          {listalbum && (
            <div>
              {listalbum.map((album, i) => (
                <SingleAlbum album={album} key={i} i={i} />
              ))}
            </div>
          )}
          <h2>Artist</h2>
        </div>
        <div>
          <h2>Album</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
