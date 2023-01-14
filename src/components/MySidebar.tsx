import { useDispatch} from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { BsSpotify } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import { fetchHomeSong } from "../redux/actions";
import * as React from "react"
import { ThunkDispatch } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";
import {Component} from "react"
import { connect } from "react-redux";
import { ReduxStore } from "../types/ReduxStore";
const mapSidebarStateToProps = (state: ReduxStore) => state

const mapSidebarDispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchHomeS: (query: string) => dispatch(fetchHomeSong(query))
});

class MySidebar extends Component {


render(){
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
            onClick={() => {/*fetchHomeS("queen")*/}}
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
  )
}}

export default connect(mapSidebarStateToProps, mapSidebarDispatchToProps )(MySidebar); ;
