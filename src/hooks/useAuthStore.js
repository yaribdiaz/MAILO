import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    setProfile,
    setUserId,
    setToken,
    setLoading
} from "../store/auth/authSlice"
import { axiosInterceptor } from "../config/clienteAxios";

export const useAuthStore = () => {
    const dispatch = useDispatch()
    const {
        token,
        userId,
        profile,
        loading
    } = useSelector((state) => state.auth)

    useEffect(() => {
        const getProfile = async () => {
            try {
                handleLoading(true)
                if(token?.access_token){
                    const {data} = await axiosInterceptor(`/oauth2/v1/userinfo?access_token=${token.access_token}`)
                    const {given_name, id, picture} = data
                    handleSetUserId(id)
                    handleSetProfile({name:given_name,picture:picture})
                    handleLoading(false) 
                }
            } catch (error) {
                console.log('error getProfile')
                handleLoading(false)
            }
        }
        getProfile()
    },[])

    const handleSetToken = (token) => {
        dispatch(setToken(token))
    }

    const handleSetUserId = (userId) => {
        dispatch(setUserId(userId))
    }
    
    const handleSetProfile= (profile) => {
        dispatch(setProfile(profile))
    }

    const handleLoading = (bool) => {
        dispatch(setLoading(bool))
    }    

    return {
        handleSetToken,
        handleSetUserId,
        handleSetProfile,
        handleLoading,
        loading,
        /* States */
        token,
        userId,
        profile
    }

}
