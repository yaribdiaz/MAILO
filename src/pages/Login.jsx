import { useEffect } from 'react'
import GoogleIcon from '../assets/google-icon.svg'
import { oauth2SignIn } from '../utils/oauthSignIn'
const Login = () => {

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token?.id_access) navigate('/mailo') 
  },[])

  return (
    <div className='flex justify-center mt-20 '>
        <div className='flex flex-col justify-center p-5 bg-black rounded-xl'>


        <div className=''>
          <p className='text-white '>Inicia sesión y disfruta de la <span className='font-bold text-lime-600'>organización</span>.</p>
        </div>

        <button onClick={oauth2SignIn} className='bg-white py-1 px-3 rounded-md mt-5'>
                <div className='flex justify-center'>
                  <img className='w-7 mr-3' src={GoogleIcon} alt='Google Icon'/>
                  <p className='text-xl font-medium'>Iniciar Sesión</p>
                </div>
        </button> 


      
        </div>
    </div>
  )
}

export default Login
