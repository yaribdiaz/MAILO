import { useEmail } from "../context/EmailProvider"
import HeaderLoader from "./HeaderLoader"

const Header = () => {


  const {perfil, cargando} = useEmail()




  return (

    <>
        
        <div className='bg-black py-2'>
          <div className='px-5'>
              <div className='flex justify-between items-center'>
                  <p className='text-xl font-bold text-white'>MAILO</p>
                  {
                  cargando ?
                  (
                    <HeaderLoader/>
                  ) : (
                  <div className=' flex items-center flex-row  rounded-xl '>
                  
                  <p className='pr-5 text-sm py-1 px-4 text-white' >{perfil.given_name}</p>
                  <img className="md:w-8 lg:w-9 p-[1px] bg-white rounded-full" src={perfil.picture} />
                  <button  className="bg-white text-gray-600 px-2 ml-4 rounded-xl text-sm font-semibold hover:bg-black hover:border-2  hover:px-3 hover:border-white hover:text-white hover:shadow-white/[0.50] shadow transition-all duration-300">
                    Cerrar Sesión
                  </button> 
                   
              </div>
              )} 
            </div>
          </div>
        </div>
      

</>

  )
}

export default Header
