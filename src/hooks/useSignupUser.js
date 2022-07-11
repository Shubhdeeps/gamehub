import {  useState } from "react"
import { registerNewUser } from "../service/user.services"
import { useNavigate } from 'react-router-dom'


export const useSignupUser = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()

    const signup = () => {
        if(!email || !password || !username){
            setErrors('All fields required')
            return
        }
        const params = {username, email, password}
        registerNewUser(params, setResponse, setErrors)
    }
    const setResponse = (res) => {
        setEmail('')
        setPassword('')
        setUsername('')
        setErrors('')
        navigate(`/user/login`, { replace: true });
    }   


    return {
        email,
        setEmail,
        password,
        setPassword,
        username,
        setUsername,
        errors,
        signup
    }
}