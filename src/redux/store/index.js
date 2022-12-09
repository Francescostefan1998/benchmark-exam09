import {
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
  color: changecolor,
  /*
  
    store:{
      job:{
        content:[]
      }
    }
    */
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
