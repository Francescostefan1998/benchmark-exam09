/*import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import albumReducer from "../reducers/albumReducer";
import { changecolor } from "../actions";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transform: [
    encryptTransform({
      secretKey: "REACT_APP_SECRET_KEY",
    }),
  ],
};
const bigReducer = combineReducers({
  album: albumReducer,
 
  
  
    store:{
      job:{
        content:[]
      }
    }
});
const persistedReducer = persistReducer(persistConfig, bigReducer);
export const store = configureStore({
  
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
    */
import { Album } from "../../types/Album";
import { ArrayOfAlbum } from "../../types/ArrayOfAlbum";
import { Song } from "../../types/Song";
import { ReduxStore } from "../../types/ReduxStore";
import { AnyAction } from "redux";
import {
  contentReducer,
  favouriteReducer,
  selectedReducer,
  searchReducer,
} from "../reducers/albumReducer";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const composeEnhancers =
  (window as any)._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const initialState: ReduxStore = {
  content: {
    song: [],
  },
  selected: {
    albumSelected: null,
  },
  search: { albumArray: [] },
  favourite: { songSelected: null },
};

const bigReducer = combineReducers({
  content: contentReducer,
  selected: selectedReducer,
  search: searchReducer,
  favourite: favouriteReducer,
});
const configureStore = () =>
  createStore(
    bigReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

export default configureStore;
