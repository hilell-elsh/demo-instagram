import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isModal: false,
        title: ''
    },
    reducers: {
        modalOpen: (state) => {
            state.isModal = true;
        },

        modalClose: (state) => {
            state.isModal = false;
        },

        // setTitle: (state, action) => {
        //     state.isModal
        // }
    }
})

export const {modalOpen, modalClose} = modalSlice.actions

export default modalSlice.reducer