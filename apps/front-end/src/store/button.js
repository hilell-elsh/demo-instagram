import { createSlice } from '@reduxjs/toolkit'

export const buttonSlice = createSlice({
    name: 'button',
    initialState: {
        isButton: false,
    },
    reducers: {
        buttonOpen: (state) => {
            state.isButton = true
        },

        buttonClose: (state) => {
            state.isButton = false
        },
    },
})

export const { buttonOpen, buttonClose } = buttonSlice.actions

export default buttonSlice.reducer
