import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isUser: false,
        user: {}
    },
    reducers: {
        setCurUser: (state, user) => {
            state.user = user;
            state.isUser = true;
            console.log(state.user);
        },

        getCurUser: (state) => {
            return state.user
        },

        isUser: (state) => {
            return state.isUser
        },

        clear: (state) => {
            state.user = {};
            state.isUser = false;
        }
    }
})

export const { setCurUser, getCurUser, isUser, clear } = userSlice.actions

export default userSlice.reducer