import { useEffect} from "react"
import { useEmail } from "../context/EmailProvider"
import { useParams } from "react-router-dom"
import MailBar from "./MailBar"
import EmailBody from "./EmailBody"

const Email = () => {

    const params = useParams()
    const {getEmail, mensaje, htmlDecode} = useEmail()
    
    console.log(mensaje)

    useEffect(() => {
        getEmail(params.id)
    },[])

    

  return (

    <> 

    <div className="h-full overflow-hidden">
        
        <div className="pb-3 border-b-[2px] border-slate-400/[0.40]">
          <MailBar/>
        </div>

        <div className="mt-2 h-full overflow-y-scroll">
          {/* {cargandoContenido ? 'cargando' :( */}
            <div className="text-sm ">
            
              <EmailBody htmlDecode={htmlDecode}/>
            </div> 
          {/* )} */}
        </div>
  


    </div>

</>
  )
}

export default Email
