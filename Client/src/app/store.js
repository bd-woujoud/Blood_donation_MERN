import { configureStore } from "@reduxjs/toolkit";

import AnnonceReducers from "../features/annonce/annonceSlice";
import UserReducers from "../features/user/userSlice";
import authetificationReducer from'../features/authentification/authSlice'
export const store = configureStore({
  reducer: {
    annonces: AnnonceReducers,
    users: UserReducers,
    auth : authetificationReducer,
  },
});
