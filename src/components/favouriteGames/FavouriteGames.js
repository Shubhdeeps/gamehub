import { Titles } from "../title/Titles"
import { Button, Container } from "react-bootstrap"
import { useState } from "react"
import { useSelector } from 'react-redux'
import { Colors } from "../../assets/Colors"
import { useNavigate } from "react-router-dom"

export const FavouriteGames = () => {
    const [isFlex, setIsFlex] = useState(true)
    const navigate = useNavigate()
    const user_favourites = useSelector(s => s.users)
    const handleClick = (id, name) => {
        if(typeof(id) === "number"){
            navigate(`/games/${id}`, { replace: true });
        }
        if(typeof(id) === "string"){
            navigate(`/games/users/${name}`, { replace: true });
        }
    }
    return (
        <>
        <Container className="mt-4 mb-4">
            <Titles title={`User's favourite`} isFlex={isFlex} setFlex={setIsFlex}/>
            <div className={`mt-4 pt-4 d-flex flex-wrap gap-2 ${isFlex ? 'isFlex' : 'isNotFlex'}`}>
                <br />
                {user_favourites.username ? <>
                {user_favourites.favourite_games.map(x => {
                    return(
                    <Button key={x.id} onClick={() => handleClick(x.id, x.name)} variant='danger' className="text-light rounded-pill p-1 ps-5 pe-5 tags-pill" 
                    style={{background: Colors.secondary_color}}
                    >
                        {x.name}
                    </Button>
                    )
                })} </> : <h4 className="text-light text-center"> Login Required </h4>}
            </div>
        </Container>
        </>
    )
}