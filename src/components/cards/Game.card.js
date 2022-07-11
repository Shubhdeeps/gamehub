import { useEffect, useState } from 'react'
import { Button, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { LoginAlert } from '../modals/LoginAlert'
import { addFavouriteGame, removeFavouriteGame } from '../../service/user.services'
import { useUsrFavouriteGames } from '../../hooks'

export const GameCard = ({ game }) => {
    const [isFavourite, setIsFavourite] = useState(false)
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const { setUserFavourite } = useUsrFavouriteGames()
    const username = useSelector(s => s.users)
    const favGames = username.favourite_games

    useEffect(() => {
        if(username.username !== ''){
            const gameIds = favGames.map(x => {
                return x.id
            })
            console.log('ids', gameIds)
            if(gameIds.includes(game.id)){
                setIsFavourite(true)
            }
        }
    }, [username.username])
    
    const handleFavourite = (id, name) => {
        if(username.username){
            if(isFavourite){
                removeFavouriteGame({newgame: id}, setNewGame)
            }else{
                addFavouriteGame({newgame: {id, name}}, setNewGame)
            }
            setIsFavourite(prevState => !prevState) 
        }
        else{
            setShow(true)
        }
    }
    const setNewGame = (res) => {
        setUserFavourite()
    }

    const handleClick = (id) => {
        navigate(`/games/${id}`, { replace: true });
    }

    return(
        <div className='card_layout rounded'>
            <Image className='card_image rounded' src={game.background_image} />
            <div className='favourite-btn text-light d-flex justify-content-end align-items-center gap-2' onClick={() => handleFavourite(game.id, game.name)}>
                {isFavourite ? 
                <>
                Added
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.875 0C9.57 0 8.3175 0.662125 7.5 1.70845C6.6825 0.662125 5.43 0 4.125 0C1.815 0 0 1.9782 0 4.49591C0 7.58583 2.55 10.1035 6.4125 13.9292L7.5 15L8.5875 13.921C12.45 10.1035 15 7.58583 15 4.49591C15 1.9782 13.185 0 10.875 0ZM7.575 12.7112L7.5 12.7929L7.425 12.7112C3.855 9.18801 1.5 6.85831 1.5 4.49591C1.5 2.86104 2.625 1.63488 4.125 1.63488C5.28 1.63488 6.405 2.44414 6.8025 3.56403H8.205C8.595 2.44414 9.72 1.63488 10.875 1.63488C12.375 1.63488 13.5 2.86104 13.5 4.49591C13.5 6.85831 11.145 9.18801 7.575 12.7112Z" fill="#FF0000"/>
                <path d="M4 4.5L7.5 9L10 6L11 4" stroke="#FF0000" strokeWidth="7" strokeLinecap="round"/>
                </svg>
                </>
                : 
                <>
                Add to favourite
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.875 0C9.57 0 8.3175 0.662125 7.5 1.70845C6.6825 0.662125 5.43 0 4.125 0C1.815 0 0 1.9782 0 4.49591C0 7.58583 2.55 10.1035 6.4125 13.9292L7.5 15L8.5875 13.921C12.45 10.1035 15 7.58583 15 4.49591C15 1.9782 13.185 0 10.875 0ZM7.575 12.7112L7.5 12.7929L7.425 12.7112C3.855 9.18801 1.5 6.85831 1.5 4.49591C1.5 2.86104 2.625 1.63488 4.125 1.63488C5.28 1.63488 6.405 2.44414 6.8025 3.56403H8.205C8.595 2.44414 9.72 1.63488 10.875 1.63488C12.375 1.63488 13.5 2.86104 13.5 4.49591C13.5 6.85831 11.145 9.18801 7.575 12.7112Z" fill="white"/>
                </svg>
                </>
                }
            </div>
            <div className='card_overlay d-flex align-items-end justify-content-center runded'>
                <div className='d-flex flex-column align-items-center'>
                    <div className='text-light fs-5 fw-normal mb-1'> {game.name} </div>
                    <Button 
                    onClick={() => handleClick(game.id)}
                    size='sm' variant='danger' className='mb-2 read_more_btn'
                    >
                        Read more
                    </Button>
                </div>
            </div>
            <LoginAlert show={show} setShow={setShow} />
        </div>
    )
}