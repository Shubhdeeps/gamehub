import { useDispatch } from "react-redux"
import { setUserFavouriteGames } from "../redux/actionCreators/userData"
import { getUserFavouriteGames } from "../service/user.services"

export const useUsrFavouriteGames = () => {
    const dispatch = useDispatch()
    
    const setUserFavourite = () => {
        getUserFavouriteGames(setFavourites)
    }

    const setFavourites = (favs) => [
        dispatch(setUserFavouriteGames(favs))
    ]

    return { setUserFavourite }
}