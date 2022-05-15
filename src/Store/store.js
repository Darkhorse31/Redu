import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "../Store/countslice";
export default configureStore({
  reducer: {
    counter: counterReducers,
  },
});
