import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'reducers/data'

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});
