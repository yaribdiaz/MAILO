import Logo from '../assets/logo.png'

const HeaderAuth = () => {
    return (
        <div className='bg-black py-2'>
          <div className='px-5'>
              <div className='flex justify-between items-center'>
                  <p className='font-bold text-xl text-white'>MAILO</p>
                 
                  <img className='w-10' src={Logo} alt='Logo email'/>
            </div>
          </div>
        </div>
      )
}

export default HeaderAuth
