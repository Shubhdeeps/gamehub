import { useParams } from "react-router-dom"
import { GamesListing, Header, Loader, PageButton, Titles } from "../components"
import pc from '../assets/images/pc-game.png'
import consoleImg from '../assets/images/console-game.png'
import mobile from '../assets/images/mobile-game.png'
import { useEffect, useState } from "react"
import { Container, Dropdown, DropdownButton } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { setPlatform } from "../redux/actionCreators/gamesData"

const parent_platforms = {
    pc:  [ {id: 1, name: 'Windows'}, {id: 5, name: 'Apple Macintosh'}, {id: 6, name: 'Linux'},] ,
    console: [ {id: 2, name: 'PlayStation'}, {id: 3, name: 'Xbox'}, {id: 7, name: 'Nintendo'}, ],
    mobile: [ {id: 4, name: 'iOS'}, {id: 8, name: 'Android'}, ]
}

export const PlatformPage = () => {
    const [platformNumber, setPlatformNumber] = useState()
    const [device, setDevice] = useState()
    const [page, setPage] = useState(1)
    const [isFlex, setIsFlex] = useState(true)
    const [loading, setLoading] = useState(false)
    const { platform } = useParams()
    const dispatch = useDispatch()
    const games = useSelector(s => s.games).platform
    let headerBg = ''

    switch(platform){
        case 'pc':
            headerBg = pc
            break;
        case 'console':
            headerBg = consoleImg
            break;
        case 'mobile':
            headerBg = mobile
            break;
        default:
            headerBg = ''
            break;
    }
    useEffect(() => {
        switch(platform){
            case 'pc':
                setPlatformNumber(1)
                break;
            case 'console':
                setPlatformNumber(2)
                break;
            case 'mobile':
                setPlatformNumber(4)
                break;
            default:
                setPlatformNumber(0)
                break;
        }
    }, [])

    useEffect(() => {
        setLoading(true)
        dispatch(setPlatform(platformNumber, page))
        setDevice(...parent_platforms[platform].filter(x => x.id === platformNumber))
    }, [platformNumber, page])

    useEffect(() => {
        setLoading(false)
    }, [games.results])

    return(
        <>
        <Header coverImage={headerBg}/>
        <Container className="pt-4 d-flex flex-column">
            <Titles title={`${platform} games`} isFlex={isFlex} setFlex={setIsFlex} />
            <div className={isFlex ? 'isFlex' : 'isNotFlex'}>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="text-light">
                        {device && device['name']}
                    </h5>
                    <DropdownButton
                    className="mt-4 mb-4 align-self-end"
                    variant="outline-secondary"
                    title="Filter by"
                    id="input-group-dropdown-1"
                    >
                        {
                            parent_platforms[platform].map(item => {
                                return <Dropdown.Item key={item.id} onClick={() => setPlatformNumber(item.id)}>{item.name}</Dropdown.Item>
                            })
                        }
                    </DropdownButton>
                </div>
                {loading ? <Loader /> : 
                <GamesListing games={games.results} />
                }
                <br />
                <br />
                <PageButton page={page} setPage={setPage} />
            </div>
        </Container>
        </>
    )
}