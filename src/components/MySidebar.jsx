import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsSpotify } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";

const MySidebar = () => {
  const navigate = useNavigate();
  return (
    <div id="sideBar" className="col-12 col-md-3">
      <div id="right-logo">
        <BsSpotify id="logo-f" />
      </div>
      <div id="center-column">
        <div className="sidebarlist" onClick={(e) => navigate("/")}>
          <div className="col-2">
            <AiFillHome />
          </div>
          <div className="col-10">Home</div>
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
