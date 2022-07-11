import { Carousel } from 'react-bootstrap'
import './carousel.css'
import skeleton from '../../assets/images/skeleton-image.png'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../loader/Loader'

export const GamesCarousel = ({ games = [] }) => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/games`, { replace: true });
    }
    return(
        <>
        <Carousel className='position-relative'>
                {games.length !== 0 ? games.map(game => {
                    return(
                    <Carousel.Item 
                    key={game.id}
                    interval={2000}>
                        <img
                        className="d-block w-100 favourite-image"
                        src={game.background_image}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    )
                })
            :
            <Carousel.Item>
                        <img
                        className="d-block w-100 favourite-image"
                        src={skeleton}
                        alt="blank"
                        />
                        <Carousel.Caption>
                        <Loader />
                        </Carousel.Caption>
            </Carousel.Item>
            }
            <div
            onClick={() => handleClick()}
            className='position-absolute corousel-overlay d-flex justify-content-center align-items-center'>
                <h5 className='lead text-light hide-text'>Explore All Games</h5>
            </div>
        </Carousel>
        </>
    )
}