import coverImg from '../../assets/images/cover-image-vertical.png'
import { Container, Image } from "react-bootstrap"
import { AddGameBtn } from './components/AddGameBtn'
import { LoginUserBtn } from './components/LoginUserBtn'
import { SearchBar } from './components/SearchBar'
import './header.css'
import { SearchExtension } from './components/SearchExtension'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = ({ coverImage = coverImg}) => {
    const [searchText, setSearchText] = useState('')
    let navigate = useNavigate()
    const handleClick = () => {
        navigate(`/dashboard`, { replace: true });
    }
    return(
    <>
        <div className='custom_navbar'>
            <Container className='d-flex flex-row align-items-center justify-content-between'>
            <h2 className='text-light' style={{opacity: 0.5, cursor: 'pointer'}} onClick={() => handleClick()}>GamingHub.com</h2>
                <div className='text-light d-flex gap-2'> 
                  <AddGameBtn />
                  <LoginUserBtn />
                </div>
            </Container>
        </div> 
        <div className='position-relative'>
            <Image src={coverImage}
            className='cover_image'
            />
        <div className='position-absolute cover_image_overlay'>
            <SearchBar setSearchText={setSearchText} />
            {searchText && <SearchExtension searchText={searchText} /> }
        </div>
        </div>
    </>
    )
}