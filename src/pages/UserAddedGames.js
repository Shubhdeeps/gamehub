
import { useParams } from 'react-router-dom';
import {  useSelector } from "react-redux";
import { GameTags, Genre, Header } from '../components';
import { Button, Container } from 'react-bootstrap';
import { Discription } from '../components/singleGame/components/Discription';
import { Colors } from '../assets/Colors';
import { useEffect, useState } from 'react';


export const UserAddedGames = () => {
    let { name } = useParams()
    const [singleGame, setSingleGame] = useState({})
    const user_added_games = useSelector(s => s.games).user_added_games
    useEffect(() => {
        const filterGame = user_added_games.filter(x => x.name === name)[0]
        setSingleGame(filterGame)
    }, [])
    return(
        <>
        <Header />
        {singleGame ? 
        <Container className="d-flex flex-column">
            <h1 className="text-light mt-4 align-self-center"> { singleGame.name || '' } </h1>
            <div className="d-flex justify-content-between container">
                <h4 className="text-light mt-4"><span style={{color: Colors.secondary_color}}> Released date: </span> { singleGame.released || 'Not Available'} </h4>
                <h4 className="text-light mt-4 align-self-end"> <span style={{color: Colors.secondary_color}}>Rating: </span>{ singleGame.rating || 'Not Available'} </h4>
            </div>
            <Discription discription={singleGame.description || 'Not Available'}/>
            <Genre genres={singleGame.genres} />
            <Genre genres={singleGame.developers} title='developers' />
            <GameTags gameTags={singleGame.tags} title='tags' />
            <div className="align-self-end d-flex gap-3">
                <Button href={singleGame.website || '#'} variant='outline-light' className="rounded-pill mt-4 mb-4 ps-3 pe-3" >Visit Official Website</Button>
            </div>
        </Container>
             :             
             <h1 className="text-light"> Something went wrong, try again</h1> }
        </>
    )
}