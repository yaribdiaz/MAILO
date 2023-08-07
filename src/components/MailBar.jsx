import { useNavigate } from "react-router-dom"

const MailBar = () => {

  const navigate = useNavigate()

  return (
    <div className='ml-4 flex justify-start divide-y-8'>
    <div className="w-5/6 sm:px-0 text-white">

        <div className='flex justify-center w-10'>
            <button onClick={() => navigate-1} className='p-2  text-black rounded-2xl hover:bg-gray-300/[0.70] hover:px-4 transition-all duration-500'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            </button>
        </div>
 
    </div>
    </div>
  )
}

export default MailBar
