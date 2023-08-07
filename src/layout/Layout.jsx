import { Outlet, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { useAuth } from "../context/AuthProvider"
import { useEmail } from "../context/EmailProvider"

const Layout = () => {
  
  const {token} = useEmail()


  return (
    <>
        { token !== null ?
          (
          <div className=" font-quicksand flex-col flex h-screen overflow-hidden ">
              <Header/>

              <div className="flex min-h-screen bg-slate-400/[.70]">
                <div className="p-10 w-1/5 flex items-start mt-10">
                <Sidebar/>
                </div>
                  

                  <main 
                      //flex-1 hace que tome todo el resto del contenido
                      className="flex-1 bg-white rounded-s-3xl mt-5" 
                  >
                      <div className="p-10">
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
