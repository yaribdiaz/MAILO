import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    emailPreview:[],
    nextPage:null,
    prevPage:null,
    currentPage:'',
    emailBody:{
        from: '',
        subject: '',
        date: '',
        body: '',
    }
}

export const mailSlice = createSlice ({
    name: 'mail',
    initialState,
    reducers: {
        setCurrentMail: (state, action) => {
            const {from, subject, date, body} = action.payload
            
            state.emailBody.from = from,
            state.emailBody.subject = subject,
            state.emailBody.date = date,
            state.emailBody.body = body
        },
        setListMail: (state, action) => {
            state.emailPreview = action.payload[0]
        },
        setNextPage: (state, action) => {
            state.nextPage = action.payload
        },
        setPrevPage: (state, action) => {
            state.prevPage = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
        
    }
})

export const {
    setCurrentMail,
    setListMail,
    setNextPage,
    setPrevPage,
    setCurrentPage
} = mailSlice.actions

export default mailSlice.reducer

