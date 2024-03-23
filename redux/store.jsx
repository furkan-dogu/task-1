import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import caseReducer from "./features/caseSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    case: caseReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
