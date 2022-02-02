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
    async (thunkAPI) => {
      const response = await getMe()
      return response.data
    }
  )

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        // setCurUser: (state, action) => {
        //     state.user = action.payload
        //     state.isUser = true
        // }

        clear: (state) => {
            state.user = {}
            state.isUser = false
        },

        setIsUser: (state, action) => {
            state.isUser = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setMyData.pending, (state) => {
            state.loading = true
        })
        builder.addCase(setMyData.fulfilled, (state, action) => {
            state.loading = false
            state.isUser = true
            state.user = action.payload
            state.error = ""
        })
        builder.addCase(setMyData.rejected, (state, action) => {
            state.loading = false
            state.isUser = false
            state.user = {}
            state.error = action.payload
        })
    }
})

export const { setIsUser, clear } = userSlice.actions

export default userSlice.reducer