import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    allCredentials: [],
    currentCredential: [],
    editCredential : false,

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
        setEditCredential: (state, action) => { 

            state.editCredential = action.payload;
        }

    }
})

export const { setAllCredentials, setCurrentCredential, setEditCredential } = passwordSlice.actions;
export default passwordSlice.reducer;