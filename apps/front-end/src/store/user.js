import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getMe } from '../services/my-data'

const initialState = {
    loading: false,
    isUser: true,
    user: {},
    error: ""
}

export const setMyData = createAsyncThunk(
    'user/fetchByIdStatus',
    async () => {
      const response = await getMe()
      return response
    }
  )

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setIsUser: (state, action) => {
            state.isUser = action.payload
        },

        clear: (state) => {
            state.user = {}
            state.isUser = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setMyData.pending, (state) => {
            console.log("pending get me")
            state.loading = true
        })
        builder.addCase(setMyData.fulfilled, (state, action) => {
            console.log("fullfill get me", action)
            state.loading = false
            state.isUser = true
            state.user = action.payload
            state.error = ""
        })
        builder.addCase(setMyData.rejected, (state, action) => {
            console.log("reject get me", action)
            state.loading = false
            state.isUser = false
            state.user = {}
            state.error = action.error
        })
    }
})

export const { setIsUser, clear } = userSlice.actions

export default userSlice.reducer