import { useState } from "react"
import { Container } from "react-bootstrap"
import { GenreCard } from "../cards/Genre.card"
import { Titles } from "../title/Titles"

export const Genre = ({genres = [], title = 'genre'}) => {
    const [isFlex, setIsFlex] = useState(true);
    return(
        <Container className="mt-4">
        <Titles title={title} setFlex={setIsFlex} isFlex={isFlex} />
        <br />
        <br />
        <div className={`d-flex flex-wrap justify-content-center ${isFlex ? 'isFlex' : 'isNotFlex'}`}
        style={{gap: '20px 20px'}}
        >
            {genres.length !== 0 && genres.map(genre => {
                return (<GenreCard 
                key={genre.id ? genre.id : genre}
                title={genre.name ? genre.name : genre}
                image={genre.image_background ? genre.image_background : ''}
                />)
            })}
        </div>
        </Container>
    )
}