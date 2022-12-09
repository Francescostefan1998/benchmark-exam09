import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const MySidebar = () => {
  return (
    <div id="sideBar" className="col-12 col-md-3">
      <div id="right-logo">logo</div>
      <div id="center-column">
        <div className="sidebarlist">
          <div className="col-4">
            <i className="fa-solid fa-house"></i>
          </div>
          <div className="col-4">Home</div>
        </div>
        <div className="sidebarlist">
          <div className="col-4">
            <i className="fa-solid fa-search"></i>
          </div>
          <div className="col-4">Search</div>
        </div>
        <div className="sidebarlist">
          <div className="col-4">
            <i className="fa-solid fa-lines-leaning library-icon"></i>
          </div>
          <div className="col-4">Your Library</div>
        </div>
      </div>
    </div>
  );
};

export default MySidebar;
