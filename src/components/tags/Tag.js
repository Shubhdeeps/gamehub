import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { Colors } from "../../assets/Colors"
import './tag.css'

export const Tag = ({ title }) => {
    const navigate = useNavigate()
    const searchParam = title.toLowerCase().replace(/ /g,",")
    const handleClick = () => {
        navigate(`/tags/${searchParam}`, { replace: true });
    }
    return(
        <Button onClick={() => handleClick()} variant='danger' className="text-light rounded-pill p-1 ps-5 pe-5 tags-pill" 
        style={{background: Colors.secondary_color}}
        >
            {title.toUpperCase()}
        </Button>
    )
}