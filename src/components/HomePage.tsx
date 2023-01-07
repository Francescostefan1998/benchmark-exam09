

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyNavbar from "./MyNavbar";
import MySidebar from "./MySidebar";
import SingleAlbum from "./SingleAlbum";
import { fetchHomeSong, fetchAlbumSong } from "../redux/actions";
import { ReduxStore } from "../types/ReduxStore";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";


type HomePageProps = {
  fetchAlbumS: (argument: string) => void;
};

const mapdispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchHomeS: (query: string) => dispatch(fetchHomeSong(query)),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchAlbumS: (query: string) => dispatch(fetchAlbumSong(query)),
});
const mapDispatchToProp = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchHomeS: (query: string) => dispatch(fetchHomeSong(query)),
});

const HomePage = (props: HomePageProps) => {
  const dispatch = useDispatch();
  const listalbum = useSelector((store: ReduxStore) => store.search);

  useEffect(() => {
    props.fetchAlbumS("metallica");
    console.log("useeffect triggered");
  }, []);

  return (
    <div className="main">
      <MySidebar {...mapDispatchToProp(dispatch)}/>
      <div className="innerMain">
        <MyNavbar {...mapdispatchToProps(dispatch)} />
        <div>
          {listalbum && (
            <div className="row">
              <div className="col-12">
                <h4>Albums</h4>
                <div className="row" id="albums">
                  {listalbum.map((album, i) => (
                    <SingleAlbum album={album} key={i} i={i}  {...mapDispatchToProps(dispatch)}/>
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
