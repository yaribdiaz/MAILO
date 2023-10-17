import { useContext, createContext, useState, useEffect} from "react";
import { axiosInterceptor, gmailInterceptor } from "../config/clienteAxios";
import { decode as base64_decode } from "base-64";
import DOMPurify from 'dompurify';

import axios from "axios";

const EmailContext = createContext()

const EmailProvider = ({children}) => {


    const [perfil, setPerfil] = useState ({})
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('oauth2')))
    const [cargando, setCargando] = useState(true)
    const [cargandoContenido, setCargandoContenido] = useState(true)
    const [emailOpcion, setEmailOpcion] = useState(0)
    const [mensajesId, setMensajesId] = useState([])
    const [mensajesPreview, setMensajesPreview] = useState([])
    const [mensaje, setMensaje] = useState([])
    const [htmlDecode, setHtmlDecode] = useState('')
    const [dataMail, setDataMail] = useState({})





    const emailCategoria = categoria => {
        setEmailOpcion(categoria)
    }

    
   
        
    const getEmails = async () => {

        try {
            const {data} = await axiosInterceptor(`/oauth2/v1/userinfo?access_token=${token.access_token}`)
            //console.log('perfilGetMails', data)
            const {data:messagesId} = await gmailInterceptor(`/gmail/v1/users/${data?.id}/messages?maxResults=50`, {
                headers: {
                    Authorization: `Bearer ${token?.access_token}`,
                    Accept: 'application/json'
                },
                params: {
                    //q: 'is:read subject:servicio'
                    //q:'subject:servicio social'
                    //q: 'is:inbox'
                    //q: 'is:read'
                    // q: 'subject:vacante'
                  }
            })
            
            setMensajesId(messagesId.messages)
            

            await axios.all(messagesId?.messages.map((endpoint) => gmailInterceptor(`/gmail/v1/users/${data?.id}/messages/${endpoint.id}`, {
                headers: {
                    Authorization: `Bearer ${token?.access_token}`,
                    Accept: 'application/json'
                }
            }) ))
            .then((preview) => setMensajesPreview(preview));
                                                       
              setCargandoContenido(false)
              //console.log('mensajes preview',mensajesPreview)
            } catch (error) {
                console.log(error)
            }finally {setCargandoContenido(false)}
    }
    

    const getEmail = async (emailId) => {
        try {
            const {data} = await axiosInterceptor(`/oauth2/v1/userinfo?access_token=${token.access_token}`)
            const {data:mail} = await gmailInterceptor(`/gmail/v1/users/${data?.id}/messages/${emailId}?format=full`, {
                headers: {
                    Authorization: `Bearer ${token?.access_token}`,
                    Accept: 'application/json'
                }
            })
             setMensaje(mail)
             let htmlCoded=''
                //console.log('part[1]',mail.payload.parts[1].body.data)
             if(mail.payload.body.data){
                 htmlCoded = (mail.payload.body.data).replace(/-/g, '+').replace(/_/g, '/')
             }else{
                 htmlCoded = (mail.payload.parts[1].body.data).replace(/-/g, '+').replace(/_/g, '/')
                
                }
                
             const subject = mail.payload.headers.filter(data => (data.name === 'Subject'))
             const date = mail.payload.headers.filter(data => (data.name === 'Date'))
             const from = mail.payload.headers.filter(data => (data.name === 'From'))
             let dateStr = new Date (date[0].value);
             let fecha = dateStr.toLocaleDateString (); // "11/07/2023"                 //console.log(formatearFecha(dateStr))
             let hora = dateStr.getHours(); // "10:42:09 GMT-0400 (hora estándar del este)"
             setDataMail({subject, date, from})
                console.log(dataMail)
             const sourc = mail.payload.parts[1].body.data
             
             const decoded = base64_decode(sourc.replace(/-/g, '+').replace(/_/g, '/'))
             const cleanHtml =DOMPurify.sanitize(decoded, {USE_PROFILES: {html: true}})
           
            setHtmlDecode(decoded)

        } catch (error) {
            console.log(error)

        }
    }

    return (
        <EmailContext.Provider
            value={{
                token,
                cargando,
                cargandoContenido,
                emailCategoria,
                emailOpcion,
                perfil,
                getEmails,
                getEmail,
                mensajesPreview,
                mensaje,
                htmlDecode,
                dataMail
            }}
        >
            {children}
        </EmailContext.Provider>
    )
} 

export {EmailProvider}
export const useEmail = () => useContext(EmailContext)