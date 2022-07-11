import { Button, Container, Image } from "react-bootstrap"
import './featuring.css'
import { Colors } from '../../assets/Colors'
import skeleton from '../../assets/images/skeleton-image.png'
import { useNavigate } from "react-router-dom"
import { Loader } from "../loader/Loader"


export const Featuring = ({ game = [] }) => {
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/games/${id}`, { replace: true });
    }
    return(
        <div className="position-relative">
            {game.length !== 0 ? 
            <>
                <Image className="latest_release_img" src={game[3].background_image}/>
                <div className="position-absolute release-overlay">
                    <br />
                    <Container fluid className="mt-5 ms-2 ">
                        <h1 className="text-light fw-bolder">Featuring</h1>
                        <h3 className="text-light fw-normal">{game[3].name}</h3>
                        <br />
                        <p className="text-light lead release-description">
                            Metacritic: {game[3].metacritic}
                        </p>
                        <p className="text-light lead release-description">
                            rating: {game[3].rating}
                        </p>
                        <br />
                        <Button onClick={() => handleClick(game[3].id)} variant="danger" style={{background: Colors.secondary_color}}>
                            Read more
                        </Button>
                    </Container>
                </div>
            </> 
            : 
            <>
            <Image className="latest_release_img" src={skeleton}/>
            <div className="position-absolute release-overlay d-flex justify-content-center align-items-center">
                <Loader />
            </div>
            
            </>

            }
        </div>
    )
}