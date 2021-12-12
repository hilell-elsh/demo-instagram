import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal'
import buttonReducer from './button'

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        button: buttonReducer,
    }
});