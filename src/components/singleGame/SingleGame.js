import { Header } from "../header/Header"
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGame } from "../../redux/actionCreators/gamesData";
import { Button, Container } from "react-bootstrap";
import { Discription } from "./components/Discription";
import { Colors } from "../../assets/Colors";
import { GameTags } from "../gameTags/GameTags";
import { Genre } from "../genres/Genres";
import { SingleGamePlatforms } from "./components/singleGamePlatforms";

export const SingleGame = () => {
    let { id } = useParams()
    const dispatch = useDispatch()
    const singleGame = useSelector(s => s.games).singleGame

    useEffect(() => {
         dispatch(fetchGame(id))
    }, [])

    return(
        <>
        <Header coverImage={singleGame.background_image_additional} />
        {singleGame.name !== undefined ? 
            <Container className="d-flex flex-column">
            <h1 className="text-light mt-4 align-self-center"> { singleGame.name } </h1>
            <div className="d-flex justify-content-between container">
                <h4 className="text-light mt-4"><span style={{color: Colors.secondary_color}}> Released date: </span> { singleGame.released || 'Not Available'} </h4>
                <h4 className="text-light mt-4 align-self-end"> <span style={{color: Colors.secondary_color}}>Rating: </span>{ singleGame.rating || 'Not Available'} </h4>
            </div>
            <Discription discription={singleGame.description_raw}/>
            <SingleGamePlatforms platforms={singleGame}/>
            <Genre genres={singleGame.genres} />
            <Genre genres={singleGame.developers} title='developers' />
            <GameTags gameTags={singleGame.tags} title='tags' />
            <div className="align-self-end d-flex gap-3">
                <Button href={singleGame.website} variant='outline-light' className="rounded-pill mt-4 mb-4 ps-3 pe-3" >Visit Official Website</Button>
            </div>
            </Container>
          :             
          <h1 className="text-light"> Failed to fetch the game </h1>
          }
        </>
    )
}