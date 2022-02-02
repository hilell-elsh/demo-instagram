import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modal'
import userReducer from './user'
import buttonReducer from './button'

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        button: buttonReducer,
        user: userReducer
    },
    devTools: true
})
