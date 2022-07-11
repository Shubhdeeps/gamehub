import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Container } from "react-bootstrap"
import { Header } from "../header/Header"
import { Titles } from "../title/Titles"
import { PageButton } from "../buttonGroup/PageButtons"
import { GamesListing } from "../gamesListing/Games.list"
import { Loader } from "../loader/Loader"

export const EnlistGames = ({ setGames, title, coverImage, apiParam = '' }) => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [isFlex, setIsFlex] = useState(true)
    const [loading, setLoading] = useState(false);
    const games = useSelector(s => s.games).games
    useEffect(() => {
        setLoading(true)
        dispatch(setGames(apiParam, page))
   }, [page])

    useEffect(() => {
        setLoading(false)
    }, [games])
    return(
        <>
        <Header coverImage={coverImage} />
        <Container className="mt-4">
            <Titles title={title} isFlex={isFlex} setFlex={setIsFlex}/>
            {loading ? <Loader /> : 
            <div className={`mt-4 mb-4 ${isFlex ? 'isFlex' : 'isNotFlex'}`}>
            <PageButton page={page} setPage={setPage} />
            <GamesListing games={games.results} />
            <br />
            <PageButton page={page} setPage={setPage} />
            <br />
            </div>
            }
        </Container>
        </>
    )
}