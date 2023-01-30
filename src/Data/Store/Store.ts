import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../Slices/AuthReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  AuthReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({ reducer: persistedReducer });
export default store;
export type RootStore = ReturnType<typeof persistedReducer>;
export type AppDispatch = typeof store.dispatch;
