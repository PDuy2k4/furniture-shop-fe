import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { log } from 'console'
interface UserState {
  _id: string
  name: string
  email: string
  profileImg: string
  verify: Number
  isAdmin: boolean
  accessToken: string
}

const initialState: UserState | any = {
  _id: '',
  name: '',
  email: '',
  profileImg: '',
  isAdmin: false,
  verify: 0,
  accessToken: '',
  errorMsg: '',
  isLoading: false,
  isSuccessful: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state._id = action.payload._id
      state.name = action.payload.name
      state.email = action.payload.email
      state.profileImg = action.payload.profileImg
      state.verify = action.payload.verify
      state.isAdmin = action.payload.isAdmin
      state.accessToken = action.payload.accessToken
      state.errorMsg = ''
      state.isLoading = false
      state.isSuccessful = true
    },
    verifyUser: (state, action) => {
      state.verify = action.payload.verify
    },
    logout: (state) => {
      state._id = ''
      state.name = ''
      state.email = ''
      state.profileImg = ''
      state.verify = 0
      state.isAdmin = false
      state.accessToken = ''
      state.errorMsg = ''
      state.isLoading = false
      state.isSuccessful = false
    }
  }
})
export const { login, verifyUser, logout } = userSlice.actions
export default userSlice.reducer
