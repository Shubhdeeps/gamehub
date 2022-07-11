import { logoutUser } from "../service/user.services"
import { useDispatch } from "react-redux"
import { setUserName } from "../redux/actionCreators/userData"

export const useLogoutUser = () => {
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(setUserName(''))
        logoutUser()
    }

    return { logout }
}