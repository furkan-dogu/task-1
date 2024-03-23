import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  fullName: "",
  email: "",
  loading: false,
  error: false,
  token: "",
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false
      state.fullName = payload.data.fullName
      state.token = payload.data.token
      state.email = payload.data.email
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false
      state.fullName = payload.data.fullName
    },
    fetchFail: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const {
  fetchStart,
  loginSuccess,
  registerSuccess,
  fetchFail,
} = authSlice.actions

export default authSlice.reducer
