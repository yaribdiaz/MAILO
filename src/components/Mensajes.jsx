import { Link } from "react-router-dom";
import BodyLoader from "./BodyLoader";
import { useGetListMails } from "../hooks/useGetListMails";
import { useCategoriesStore } from "../hooks/useCategoriesStore";

const Mensajes = () => {

    const {listMail} =useGetListMails()
    const {loading} = useCategoriesStore()

  return (
    <>
    {loading ? <BodyLoader/>  
    : ( 
        listMail === undefined 
            ? 
                <div className="flex justify-center mt-10">
                    <h3 className="text-base text-gray-500">No hay correos aún</h3>
                </div> 
            :
                listMail?.map( mail => {
                    const from = mail.data.payload.headers.filter(data => (data.name === 'From'))
                    const subject = mail.data.payload.headers.filter(data => (data.name === 'Subject'))
                    const unread = mail.data.labelIds.some(data => (data === 'UNREAD'))

                    return(
                    
                        <Link 
                            key={mail.data.id}
                            to={`${mail.data.id}`}  
                            className={ `${!unread && 'bg-slate-100'} py-3 px-5 border-b border-gray-500/[0.32] last-of-type:border-b-0 flex shadow-stone-800 hover:border hover:border-gray-700/[0.77]  hover:shadow-md hover:cursor-pointer`} 
                        >
                        <div>
                        <input type="button" value="" className="h-3 w-3 p-[5px] border-2 border-gray-600 mr-4 hover:cursor-pointer hover:bg-gray-300" />
                        </div>
                        <div className="w-2/12 ">
                            <div className="flex-row flex ">
                            <p className={`${!unread && 'font-normal'} font-bold line-clamp-1`}>{from[0].value}</p>
                            </div>
                        
                        </div>
                        <div className="w-9/12  flex flex-row ">
                    
                            <p className={`${!unread && 'font-normal'} font-bold line-clamp-1`}>
                            <span >
                            {subject[0]?.value}
                            </span>
                            {' - '}
                            <span className="text-gray-500 font-normal">
                            {mail?.data.snippet}
                            </span>
                            </p>
                        
                        </div>
                        <div className={`${!unread && 'font-normal text-gray-600'} w-1/12 flex justify-center font-bold`}>
                            <p>7 jul</p>
                        </div>
                        
                        </Link>
                    
                )
            })
            )}
    </>
  )
}

export default Mensajes
