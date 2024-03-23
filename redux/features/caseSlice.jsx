import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cases: [],
  loading: false,
  error: false,
  flags: []
};

const caseSlice = createSlice({
  name: "case",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.error = false;
      state.loading = true;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    getCasesSuccess: (state, { payload }) => {
        state.cases = payload.data;
        state.loading = false;
        state.error = false;
    },
    getFlagsSuccess: (state, { payload }) => {
        state.flags = payload.data;
        state.loading = false;
        state.error = false;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  getCasesSuccess,
  getFlagsSuccess
} = caseSlice.actions;

export default caseSlice.reducer;
