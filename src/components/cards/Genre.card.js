import { Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './cards.css'

export const GenreCard = ({ title, image }) => {
    const navigate = useNavigate()

    const searchParam = title.toLowerCase().replace(/ /g,",")

    const handleClick = () => {
        navigate(`/genres/${searchParam}`, { replace: true });
    }
    return(
        <div
        onClick={() => handleClick()} 
        className='position-relative card-container'>
            <Image src={image} className='cards-image rounded-3' />
            <div className='position-absolute rounded-3 genre-card-overlay d-flex justify-content-center align-items-center'>
                <h2 className='text-light fw-bolder genre-card-title text-center' >{title.toUpperCase()}</h2>
            </div>
        </div>
    )
}