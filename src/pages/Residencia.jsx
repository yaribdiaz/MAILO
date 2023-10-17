import Filter from "../components/Filter"
import MailListBar from "../components/MailListBar"
import Mensajes from "../components/Mensajes"

const Residencia = () => {

return (
  <>      
    <Filter/>
    <MailListBar/>
    <div className="mt-1 bg-white text-sm h-full overflow-hidden overflow-y-scroll">
      <Mensajes/>
    </div>
  </>
)
}

export default Residencia
