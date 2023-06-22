import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../featuers/userDetailSlice";

export const store = configureStore({
  reducer: {
    app: userDetail,
  },
});