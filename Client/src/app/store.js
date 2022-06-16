import { configureStore } from "@reduxjs/toolkit";

import AnnonceReducers from "../features/annonce/annonceSlice";
import UserReducers from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    annonces: AnnonceReducers,
    users: UserReducers,
  },
});
