import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { EnlistGames } from "../components/enlistGames/EnlistGames"
import { setTagGames } from "../redux/actionCreators/gamesData"
import { useDispatch } from 'react-redux'

export const TagGames = () => {
    const { tag } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setTagGames(tag))
   }, [])

    return <EnlistGames setGames={setTagGames} title={`${tag.replace(/,/g," ")} games`} apiParam={tag} />
    
}