import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/signup-signIn/userSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const userPersistConfig = {
  key: "userInfo",
  storage,
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const store = configureStore({
  reducer: {
    userInfo: persistedUserReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
