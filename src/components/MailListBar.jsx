import { useMailStore } from "../hooks/useMailStore"

const MailListBar = () => {

    const {handleSetCurrentPage, nextPage, prevPage} = useMailStore()
    console.log(nextPage)
  return (
    <div className="mt-3 flex justify-between">

      <div className="flex gap-3">
        <button
            className="hover:bg-gray-300 bg-gray-300/[0] hover:text-gray-700 rounded-full hover:scale-105 p-2 transition-all duration-300"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </button>
        
        <button
            className="hover:bg-gray-300 bg-gray-300/[0] hover:text-gray-700 rounded-full hover:scale-105 p-2 transition-all duration-300"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        </button>
        
        <button
            className="hover:bg-gray-300 bg-gray-300/[0] hover:text-gray-700 rounded-full hover:scale-105 p-2 transition-all duration-300"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        </button>
      </div>

      <div className="flex gap-1 ">
        <button
            disabled = {false}
            onClick={() => console.log('click')}
            className="hover:bg-gray-300 bg-gray-300/[0] hover:text-gray-700 rounded-full hover:scale-105 p-2 transition-all duration-300"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </button>
        <p className="text-xs p-2">
            1 - 50
        </p>
        <button
            disabled = {nextPage === null ? true : false}
            onClick={() => handleSetCurrentPage(nextPage)}
            className= {`${nextPage === null && 'text-gray-400 hover:text-gray-400 hover:bg-transparent'} hover:bg-gray-300 bg-gray-300/[0] hover:text-gray-700 rounded-full hover:scale-105 p-2 transition-all duration-300`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </button>
      </div>

    </div>
  )
}

export default MailListBar
