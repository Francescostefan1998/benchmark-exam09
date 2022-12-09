import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import MySidebar from "./MySidebar";
const HomePage = () => {
  return (
    <div className="main">
      <MySidebar />
      <div className="innerMain">
        <MyNavbar />
        <div>
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
