import { useEffect, useState } from "react"
import { Container, Button } from "react-bootstrap"
import { Tag } from "../tags/Tag"
import { Titles } from "../title/Titles"
import { useSelector } from 'react-redux';


export const GameTags = ({ gameTags = [], title, buttons = false, pages, setPages }) => {
    const [isFlex, setIsFlex] = useState(true);

    const handleNext = () => {
        setPages(prevState => prevState + 1)
    }
    const handlePrev = () => {
        setPages(prevState => prevState - 1)
    }
    

    return(
        <Container className="mt-4">
        <Titles title={title} setFlex={setIsFlex} isFlex={isFlex} />
        <div className={`pt-4 ${isFlex ? 'isFlex' : 'isNotFlex'}`}> 
            <div className="d-flex flex-row gap-3 flex-wrap justify-content-center">
            {gameTags.length !== 0  && gameTags.map(tag => {
                return <Tag 
                key={tag.id ? tag.id : tag} 
                title={tag.name ? tag.name : tag}
                />
            })}
            </div>
            <br />
            <div className={`d-flex pb-4 pe-1 ps-1 justify-content-between ${buttons ? '' : 'hidden'}`}>
                <Button 
                variant='outline-light' 
                className="rounded-pill ps-4 pe-4"
                onClick={() => handlePrev()}
                disabled={pages <= 1}
                >
                    Previous
                </Button>
                <Button 
                variant='outline-light' 
                className="rounded-pill ps-4 pe-4"
                onClick={() => handleNext()}
                >
                    Next
                </Button>
            </div>
        </div>
        </Container>
    )
}