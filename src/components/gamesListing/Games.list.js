import { GameCard } from "../cards/Game.card"

export const GamesListing = ({ games= [] }) => {
    return(
            <div className="d-flex flex-wrap justify-content-center"
            style={{gap: '50px 20px'}}
            >
                {games.length !== 0 && 
                games.map(game => {
                    return <GameCard key={game.id}  game={game} />
                })
                }
            </div>
    )
}