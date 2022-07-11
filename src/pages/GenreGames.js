import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { EnlistGames } from "../components/enlistGames/EnlistGames"
import { setGenreGames } from "../redux/actionCreators/gamesData"
import { useDispatch } from 'react-redux'

export const GenreGames = () => {
    const { genre } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setGenreGames(genre))
   }, [])
    return <EnlistGames setGames={setGenreGames} title={`${genre.replace(/,/g," ")} games`} apiParam={genre} />
    
}