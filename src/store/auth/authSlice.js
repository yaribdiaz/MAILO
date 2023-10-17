import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : JSON.parse(localStorage.getItem('oauth2')),
    userId : null,
    profile :{
        name: '',
        picture: ''
    },
    loading:false
}

export const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers:{
        setToken: (state, action) => {
            state.token = action.payload
        },
        setProfile: (state, action) => {
            const {name, picture} = action.payload
            state.profile.name = name
            state.profile.picture = picture
        },
        setUserId: (state, action) => {
            state.userId = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const {
    setToken,
    setProfile,
    setUserId,
    setLoading
} = authSlice.actions

export default authSlice.reducer