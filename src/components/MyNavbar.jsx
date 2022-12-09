import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const MyNavbar = () => {
  return (
    <div id="myNavbar">
      <div id="leftSideNavbar">
        <div className="arrow">c</div>
        <div className="arrow">c</div>
      </div>
      <div id="rightSideNavbar">c</div>
    </div>
  );
};

export default MyNavbar;
