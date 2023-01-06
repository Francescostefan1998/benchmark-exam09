import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useStore } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { BsSpotify } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import { fetchHomeSong } from "../redux/actions";
import * as React from "react"

const MySidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div id="sideBar" className="col-12 col-md-3">
      <div id="right-logo">
        <BsSpotify id="logo-f" />
      </div>
      <div id="center-column">
        <div className="sidebarlist">
          <div className="col-2">
            <AiFillHome />
          </div>
          <Link
            to="/"
            onClick={() => dispatch(fetchHomeSong("queen"))}
            className="col-10"
          >
            Home
          </Link>
        </div>
        <div className="sidebarlist">
          <div className="col-2">
            <BsSearch />
          </div>
          <div className="col-10">Search</div>
        </div>
        <div className="sidebarlist">
          <div className="col-2">
            <BiLibrary />
          </div>
          <div className="col-10">Your Library</div>
        </div>
      </div>
    </div>
  );
};

export default MySidebar;
