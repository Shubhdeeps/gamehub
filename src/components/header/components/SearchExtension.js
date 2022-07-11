import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { setSearchGames } from '../../../redux/actionCreators/gamesData'

export const SearchExtension = ({ searchText }) => {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const games = useSelector(s => s.games).search
    const handleClick = (id) => {
        navigate(`/games/${id}`, { replace: true });
    }

    useEffect(() => {
        dispatch(setSearchGames(searchText))
    }, [searchText])

    return(
        <div className="search_extension rounded-3 shadow pt-1 pb-1">
            {games.length !== 0 && games.results.map(x => {
                return <div 
                key={x.id}  
                onClick={() => handleClick(x.id)}
                className="search-items border-bottom pt-1 pb-1"> {x.name}</div>
            })}
        </div>
    )
}