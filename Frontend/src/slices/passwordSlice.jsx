import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    allCredentials: [],
    currentCredential: [],

}

export const passwordSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {
        
        setAllCredentials: (state, action) => { 

            state.allCredentials = action.payload;
        },

        setCurrentCredential: (state, action) => {

            state.currentCredential = action.payload;
        },

    }
})

export const { setAllCredentials, setCurrentCredential } = passwordSlice.actions;
export default passwordSlice.reducer;