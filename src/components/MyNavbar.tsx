import {useState } from "react";
import { Form} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { fetchHomeSong } from "../redux/actions";
import * as React from "react"
import { Action } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";
import { useEffect } from "react";
import {Component} from "react"
import { connect } from "react-redux";
import { ReduxStore } from "../types/ReduxStore";
import { Album } from "../types/Album";
const mapNavbarStateToProps = (state: ReduxStore) => {
  return {
    album: state.selected,
    listAlbum: state.search}}


const mapNavbarDispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchHomeS: (event: string) => dispatch(fetchHomeSong(event))
});
interface navbarPageProps {
  fetchHomeS: (query: string) => void,
  album: ReduxStore["selected"]
  listAlbum: ReduxStore["search"]
  }
  interface navbarPageState {
    search: Album[]
    selected: Album | null
    query: string
  }


class MyNavbar extends Component<navbarPageProps, navbarPageState>{
  //const [query, setQuery] = useState("queen");
  //const [dropdown, setDropDown] = useState("dropdown-album");
  //const dispatch = useDispatch();
 // console.log(query);
 state: navbarPageState = {
  search: this.props.listAlbum.albumArray,
  selected: null,
  query: "metallica"
}


/*
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    props.fetchHomeS(query);

  };*/
  render(){
  return (
    <div id="myNavbar">
      <div id="leftSideNavbar" className="navigation-buttons">
        <div className="arrow">
          <FaChevronLeft />
        </div>
        <div className="arrow">
          <FaChevronRight />
        </div>
      </div>
      <div className="search">
        <div className="input">
          <BsSearch className="text-dark" />
          <Form /*onSubmit={handleSubmit}*/>
            <input
              type="search"
              value={this.state.query}
              onChange={(e) => {
                this.setState({query: e.target.value});
                this.props.fetchHomeS(e.target.value);
            }}
              placeholder="What do you want to listen to?"
            />
          </Form>
        </div>
      </div>
      <div id="rightSideNavbar">
        <div className="user">
          <div>
            <img src="https://th.bing.com/th/id/OIP.zc3XRPZxUt4Xt7zDZYLa_wHaHa?pid=ImgDet&rs=1" alt="image"/>
          </div>
          <div>John Doe</div>
          <div
            id="dropdown-album"
            /*onClick={() =>
              dropdown !== "dropdown-album1"
                ? setDropDown("dropdown-album1")
                : setDropDown("dropdown-album")
            } 
          */
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
            <div /*className=dropdown*/ id="c-d-r">
              <div className="row drop-list-song">
                <div className="col-8">Account</div>
                <div className="col-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                      />
                    </svg>
                </div>
              </div>

              <div className="row drop-list-song">
                <div className="col-8">Profile</div>
                <div className="col-2">
                </div>
              </div>
              <div className="row drop-list-song">
                <div className="col-10">Do upgrade</div>
                <div className="col-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                      />
                    </svg>
                </div>
              </div>
              <div className="row drop-list-song">
                <div className="col-8">Assistance</div>
                <div className="col-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                      />
                    </svg>
                </div>
              </div>
              <div className="row drop-list-song">
                <div className="col-8">Download</div>
                <div className="col-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                      />
                    </svg>
                </div>
              </div>
              <div className="row drop-list-song">
                <div className="col-8">Settings</div>
                <div className="col-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                      />
                    </svg>
                </div>
              </div>
              <hr className="hrr" />

              <div className="row drop-list-song">
                <div className="col-4">Exit</div>
                <div className="col-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                      />
                    </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}};

export default connect(mapNavbarStateToProps, mapNavbarDispatchToProps )(MyNavbar); ;
