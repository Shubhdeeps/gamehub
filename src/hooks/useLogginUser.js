import {  useState } from "react"
import { setUserName } from "../redux/actionCreators/userData"
import { loginUser } from "../service/user.services"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useUsrFavouriteGames } from "./useUserFavouriteGames"

export const useLogginUser = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()
    const { setUserFavourite } = useUsrFavouriteGames()
    const dispatch = useDispatch()

    const login = async () => {
        if(!email){
            setErrors('Please enter the email address')
            return
        }
        if(!password){
            setErrors('Please enter the password')
            return
        }
        await loginUser({
            email,
            password
        }, setResponse, setErrors )

    }

    const setResponse = (res) => {
        setEmail('')
        setPassword('')
        setErrors('')
        dispatch(setUserName(res))
        setUserFavourite()
        navigate(`/dashboard`, { replace: true });
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        errors,
        login
    }
}