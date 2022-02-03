import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getMe } from '../services/my-data'

const defaultUser = {
    "userBasicData": {
        "username": "username",
        
    },
    "additionalData": {
        "name": {
            "firstName": "firstName",
            "lastName": "lastName"
        },
        "email": "email",
        "followers": 0,
        "following": 0,
        "created": new Date(0)
    },
    "posts": {
        "myPosts": [],
        "taggedPosts": [],
        "savedPosts": [],
        "postsAmount": 0,
        "firstPosts": []
    },
    "_id": "0",
    "__v": 0,
    "id": "0"
}

const initialState = {
    loading: false,
    isUser: true,
    user: {...defaultUser},
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
            state.user = {...defaultUser}
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