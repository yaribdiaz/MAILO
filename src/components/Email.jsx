import { useEffect, useState } from "react"
import { useEmail } from "../context/EmailProvider"
import { useParams } from "react-router-dom"
import { decode as base64_decode } from "base-64"
import MailBar from "./MailBar"
import EmailBody from "./EmailBody"

const Email = () => {

    const params = useParams()
    const {getEmail, mensaje, htmlDecode, cargandoContenido} = useEmail()
    
    console.log(mensaje)

    useEffect(() => {
        getEmail(params.id)
    },[])

    

  return (

    <> 

    <div className="" >
        
        <div className="pb-3 border-b-[2px] border-slate-400/[0.40]">
          <MailBar/>
        </div>

        <div className="mt-2">
          {/* {cargandoContenido ? 'cargando' :( */}
            <div className="text-sm h-screen overflow-y-scroll ">
            
              <EmailBody htmlDecode={htmlDecode}/>
            <div className="h-36"> </div>
            </div> 
          {/* )} */}
        </div>
  


    </div>

</>
  )
}

export default Email
