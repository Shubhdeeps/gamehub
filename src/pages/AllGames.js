import { EnlistGames } from "../components/enlistGames/EnlistGames"
import { setGames } from "../redux/actionCreators/gamesData"
import { useDispatch } from 'react-redux'
import { useEffect } from "react"

export const AllGames = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setGames())
   }, [])
   
    return <EnlistGames setGames={setGames} title='All games' />
}