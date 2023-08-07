import { useEffect} from "react"
import { useEmail } from "../context/EmailProvider"
import Mensajes from "../components/Mensajes"
import Filter from "../components/Filter"


const EmailTodos = () => {
  const {getEmails} = useEmail()


useEffect(() => {
  getEmails()
},[])
  
return (
  <>      
    <Filter/>
    <div className="mt-5 bg-white text-sm h-full overflow-hidden overflow-y-scroll">
      <Mensajes/>
    </div>
  </>
)
}

export default EmailTodos
