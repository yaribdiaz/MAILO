import { useEffect, Suspense, useState } from "react"
import Filter from "../components/Filter"
import { useEmail } from "../context/EmailProvider"
import Mensajes from "../components/Mensajes"


const EmailTodos = () => {
  const {getEmails} = useEmail()


useEffect(() => {
  getEmails()
},[])
  
return (
  <> 

        <div>
      
              <Filter/>


          <div className="mt-7 ">
            <div className="bg-white text-sm h-screen overflow-y-scroll">
              <Mensajes/>
            <div className="h-48">
              
            </div>
            </div>

            
        
            </div>
      


        </div>

  </>
)
}

export default EmailTodos
