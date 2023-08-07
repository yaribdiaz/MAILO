import { Outlet } from "react-router-dom"
import HeaderAuth from "../components/HeaderAuth"
const AuthLayout = () => {
  return (
    <div className="font-quicksand">
        <div>
            <HeaderAuth/>
        </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default AuthLayout
