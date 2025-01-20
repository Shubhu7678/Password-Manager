
import { configureStore } from '@reduxjs/toolkit'
import passwordReducer from './slices/passwordSlice'

const store = configureStore({

    reducer: {
        password : passwordReducer,
    }
})

export default store