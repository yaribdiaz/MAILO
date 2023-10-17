import { useSelector, useDispatch } from "react-redux";

import { 
    setCurrentMail, 
    setListMail,
    setNextPage,
    setPrevPage,
    setCurrentPage
} from "../store/mail/mailSlice";

export const useMailStore = () => {

    const dispatch = useDispatch()
    const {
        emailPreview,
        nextPage,
        prevPage,
        currentPage,
        emailBody,
    } = useSelector((state) => state.mail)
    
    const handleSetCurrentMail = (emailBody) => {
        dispatch(setCurrentMail(emailBody))
    }

    const handleSetListMails = (listMails) => {
        dispatch(setListMail(listMails))
    }

    const handleSetNextPage = (nextPage) => {
        dispatch(setNextPage(nextPage))
    }

    const handleSetPrevPage = (prevPage) => {
        dispatch(setPrevPage(prevPage))
    }

    const handleSetCurrentPage = (current) => {
        dispatch(setCurrentPage(current))
    }

    return {
        handleSetCurrentMail,
        handleSetListMails,
        handleSetNextPage,
        handleSetPrevPage,
        handleSetCurrentPage,
        /* States */
        emailPreview,
        emailBody,
        nextPage,
        prevPage,
        currentPage
    }

}


