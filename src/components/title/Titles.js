import { Button} from "react-bootstrap"
import { Colors } from "../../assets/Colors"


export const Titles = ({ title, setFlex, isFlex }) => {

    const handleFlex = () => {
        setFlex(prevState => !prevState)
    }
    
    
    return(
        <div className="d-flex justify-content-between">
            <div
            className="d-flex flex-row">
                <div className="title_style me-3" style={{background: Colors.secondary_color}}>
                </div>
                <h3 className="fw-bold text-light" >{title.toUpperCase()}</h3>
            </div>
            <div>
                <Button variant="outline-secondary" onClick={() => handleFlex()}>
                    {isFlex ? 
                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L8.87719 12L16 2" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    : 
                    <svg width="15" height="18" viewBox="0 0 15 18" fill="none">
                    <path d="M2 16L12 9.12281L2 2" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    }
                </Button>
            </div>
        </div>
    )
}