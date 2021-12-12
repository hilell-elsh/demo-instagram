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
            state.title = event.target.innerText;
        },

        modalClose: (state) => {
            state.isModal = false;
            state.title = '';
        },
    }
})

export const {modalOpen, modalClose} = modalSlice.actions

export default modalSlice.reducer