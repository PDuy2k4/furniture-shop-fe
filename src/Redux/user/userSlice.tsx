import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  sendingForm: false,
  error: null
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.sendingForm = true
    },
    loginSuccess: (state, action) => {
      state.sendingForm = false
      state.currentUser = action.payload
      state.error = null
    },
    loginFailure: (state, action) => {
      state.sendingForm = false
      state.error = action.payload
    }
  }
})

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions

export default userSlice.reducer
