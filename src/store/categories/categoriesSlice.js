import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categorieTopic : 0,
    categorieFilter : 0,
    loading:false
}

export const categoriesSlice = createSlice ({
    name:'categories',
    initialState,
    reducers:{
        setCategorieTopic : (state, action) => {
            state.categorieTopic = action.payload
        },
        setCategorieFilter : (state, action) => {
            state.categorieFilter = action.payload
        },
        setLoading : (state, action) => {
            state.loading = action.payload
        }
    }
})

export const {
    setCategorieFilter,
    setCategorieTopic,
    setLoading
} = categoriesSlice.actions

export default categoriesSlice.reducer