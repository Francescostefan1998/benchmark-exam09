import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
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
            <div class="row">
              <div class="col-12">
                <h4>Albums</h4>
                <div class="row" id="albums">
                  {listalbum.map((album, i) => (
                    <SingleAlbum album={album} key={i} i={i} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
