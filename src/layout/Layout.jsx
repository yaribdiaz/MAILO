import { useEffect } from "react"
import { Outlet, Navigate, useNavigate, useLocation } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { useEmail } from "../context/EmailProvider"

const Layout = () => {
  
  const {token} = useEmail()

  const {pathname} = useLocation()
  const navigate = useNavigate();
  useEffect(() => {
    if(pathname === "/mailo"){
      navigate("/mailo/emails")
    }
  },[])



  return (
    <>
        { token !== null ?
          (
          <div className="bg-slate-400/[.70] font-quicksand flex-col flex h-screen overflow-hidden">
          {/* <div className=" font-quicksand flex-col flex h-screen overflow-hidden "> */}
              <Header/>
              <div className="flex sm:flex-col lg:flex-row p-5 h-full overflow-hidden">
              {/* <div className="flex min-h-screen bg-slate-400/[.70]"> */}
                <div className="p-8 lg:w-1/5 flex lg:items-start lg:mt-10">
                <Sidebar/>
                </div>
                  
                  <main 
                      //flex-1 hace que tome todo el resto del contenido
                      className="overflow-hidden flex-1 bg-white rounded-3xl" 
                  >
                    
                      <div className="h-full overflow-hidden px-5 pt-5 pb-20">
                        <Outlet/>
                      </div>
                  </main>
                  
              </div>

          </div>

          )
          :
          <Navigate to="/"/>
        }
        


    </>

  )
}

export default Layout
