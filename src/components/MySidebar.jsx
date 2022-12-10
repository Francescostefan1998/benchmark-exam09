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
  return (
    <div id="sideBar" className="col-12 col-md-3">
      <div id="right-logo">
        <BsSpotify />
      </div>
      <div id="center-column">
        <div className="sidebarlist">
          <div className="col-4">
            <AiFillHome />
          </div>
          <div className="col-4">Home</div>
        </div>
        <div className="sidebarlist">
          <div className="col-4">
            <BsSearch />
          </div>
          <div className="col-4">Search</div>
        </div>
        <div className="sidebarlist">
          <div className="col-4">
            <BiLibrary />
          </div>
          <div className="col-4">Your Library</div>
        </div>
      </div>
    </div>
  );
};

export default MySidebar;
