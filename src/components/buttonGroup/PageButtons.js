import { Button } from "react-bootstrap"


export const PageButton = ({setPage, page}) => {
    return(
        <div className="d-flex justify-content-between align-items-center mt-2 mb-4 text-light">
                    <Button 
                    onClick={() => setPage(prevState => prevState - 1)}
                    disabled={page === 1} 
                    variant="outline-light" 
                    className="rounded-pill ps-4 pe-4"> 
                    Previous 
                    </Button>
                    {page}
                    <Button
                    onClick={() => setPage(prevState => prevState + 1)}
                    variant="outline-light" 
                    className="rounded-pill ps-4 pe-4"> 
                    Next 
                    </Button>
        </div>
    )
}