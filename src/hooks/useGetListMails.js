import { useEffect, useState } from "react"
import { useCategoriesStore } from "./useCategoriesStore"
import { useAuthStore } from "./useAuthStore"
import { gmailInterceptor } from "../config/clienteAxios"
import { axiosInterceptor } from "../config/clienteAxios"
import { useMailStore } from "./useMailStore"
import axios from "axios"

export const useGetListMails = () => {
    
    const [listMail, setListMail] = useState([])
    const {categorieTopic, categorieFilter, handleLoading} = useCategoriesStore()
    const {handleSetNextPage, currentPage, handleSetCurrentPage} = useMailStore()
    const {token} = useAuthStore()
    

    useEffect(() => {
        getEmailList()
    },[categorieFilter, categorieTopic,currentPage])

    useEffect(() => {
        handleSetCurrentPage('')
    },[categorieFilter, categorieTopic])

    //const categorieTopicMeans = ['is:inbox', 'subject:servicio social', 'subject:residencia', 'subject:egresado', 'subject:comunicado']
    //const categorieFilterMeans = ['is:inbox','is:read','is:unread','is:sent','subject:comunicado']
    const categorieTopicMeans = [{is:'inbox'},{subject:'servicio social'}, {subject:'residencia'}, {subject:'egresado'}, {subject:'comunicado'}]
    const categorieFilterMeans = [{is:'inbox'},{is:'read'},{is:'unread'},{is:'sent'},{subject:'comunicado'}]

    const getChainRequest = () => {
        if(Object.keys(categorieTopicMeans[categorieTopic])[0] === Object.keys(categorieFilterMeans[categorieFilter])[0]){
            const q = Object.keys(categorieTopicMeans[categorieTopic])[0]
            const topic =categorieTopicMeans[categorieTopic][q] === 'inbox' ? '' : categorieTopicMeans[categorieTopic][q]
            const filter =categorieFilterMeans[categorieFilter][q]

            const req = `${q}${':'}${topic === filter ? topic : `${topic} ${filter}` } `
            return(req)
        }
        else{
            const q1 = Object.keys(categorieTopicMeans[categorieTopic])[0]
            const q2 = Object.keys(categorieFilterMeans[categorieFilter])[0]
            const req =`${q1}:${categorieTopicMeans[categorieTopic][q1]} ${q2}:${categorieFilterMeans[categorieFilter][q2]}`
            return(req)
        }
    }


    const getEmailList = async () => {
        
        //console.log(categorieTopicMeans[categorieTopic].subject)
        try {
            handleLoading(true)

            const request = getChainRequest()
            console.log(currentPage)
            const {data:user} = await axiosInterceptor(`/oauth2/v1/userinfo?access_token=${token.access_token}`)
            const {data:messagesId} = await gmailInterceptor(`/gmail/v1/users/${user.id}/messages?maxResults=50&pageToken=${currentPage}`, {
                headers: {
                    Authorization: `Bearer ${token?.access_token}`,
                    Accept: 'application/json'
                },
                params: {
                    q:request
                    //q:'is:sent' //q:'subject:servicio urgente' //q:categorieFilterMeans[categorieFilter]
                    //q: 'is:inbox', // Filtrar por mensajes en inbox
                  }
            })
            console.log(messagesId)
            if(messagesId.resultSizeEstimate === 0){
                return setListMail(undefined)
            }

            if(messagesId.nextPageToken){
                handleSetNextPage(messagesId.nextPageToken)
            }else handleSetNextPage(null)
            
            await axios.all(messagesId?.messages.map((endpoint) => gmailInterceptor(`/gmail/v1/users/${user.id}/messages/${endpoint.id}`, {
                headers: {
                    Authorization: `Bearer ${token?.access_token}`,
                    Accept: 'application/json'
                }
            }) ))
            .then((preview) => setListMail(preview))
            handleLoading(false)                                          
            } catch (error) {
                console.log(error)
                handleLoading(false)
            }finally {
                handleLoading(false)
        }
    }
    return {listMail}
}