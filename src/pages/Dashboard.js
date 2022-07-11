import { useEffect, useState } from "react"
import { GamesCarousel, GameTags, Genre, Header, Featuring, Platforms } from "../components"
import { useDispatch, useSelector } from 'react-redux'
import { setAllGames, setGenres, setTags, setUserAddedGames } from "../redux/actionCreators/gamesData"
import { FavouriteGames } from "../components/favouriteGames/FavouriteGames"
import { getAllGames } from "../service/game.service"

export const Dashboard = () => {
    const dispatch = useDispatch()
    const games = useSelector(s => s.games)
    const [featuringGame, setFeaturingGame] = useState([])
    const [genres, setNewGenres] = useState([])
    const [tags, setNewTags] = useState([])
    const [page, setPage] = useState(1)


    const getUserAddedGames = (games) => {
        dispatch(setUserAddedGames(games))
    }
 
    useEffect(() => {
        getAllGames(getUserAddedGames)
    }, [games.user_added_games])

    useEffect(() => {
        dispatch(setAllGames())
    }, [])
    useEffect(() => {
        dispatch(setTags(page))
    }, [page])
    useEffect(() => {
        dispatch(setGenres())
    }, [])

    useEffect(() => {
            setFeaturingGame(games.allGames.results)
            setNewGenres(games.genres.results)
            setNewTags(games.tags.results)
    }, [games])

    return(
        <div style={{height: 'min-content'}}>
            <Header />
            <Platforms />
            <Featuring game={featuringGame} />
            <GamesCarousel games={featuringGame} />
            <br />
            <FavouriteGames/>
            <br />
            <Genre genres={genres} title='explore by genres' />
            <br />
            <GameTags 
            title='explore by tags' 
            gameTags={tags}
            buttons={true} 
            pages={page}
            setPages={setPage}
            />
        </div>
    )
}