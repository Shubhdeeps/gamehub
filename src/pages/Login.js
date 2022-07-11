import registration from '../assets/images/registration.png'
import { Button, Container, Image } from 'react-bootstrap'
import { DangerAlert, InputTextField } from '../components'
import { Colors } from '../assets/Colors'
import { useNavigate } from 'react-router-dom'

import { useLogginUser, useLogoutUser, useUsrFavouriteGames } from '../hooks'

export const Login = () => {
    const navigate = useNavigate()
    const { logout } = useLogoutUser()
    const {email, password, setEmail, setPassword, errors, login} = useLogginUser()

    const handleSignup = () => {
        navigate(`/user/signup`, { replace: true });
    }
    const handleLogin =  () => {
        login()
    }
    const handleGuestLogin = () => {
        logout()
        navigate(`/dashboard`, { replace: true });
    }


    return(
        <div className='login-page d-flex flex-row'> 
            <div className='registration-area d-flex align-items-center'>
                <Container className='d-flex flex-column align-items-center'
                >
                    <h1 className='fw-bolder mb-5'>Login</h1>
                    <InputTextField title='Email' placeholder='John102.gaming@gmail.com' value={email} setValue={setEmail} />
                    <br />
                    <InputTextField title='Password' placeholder='Password' type='password' value={password} setValue={setPassword} />
                    <br /><br />
                    <Button 
                    variant='danger'
                    onClick={() => handleLogin()} 
                    className='rounded-pill mb-5' 
                    style={{background: Colors.secondary_color, width: '60%'}}
                    >
                       <h4>Login</h4> 
                    </Button>
                    <h5>
                        Not registered yet? <span onClick={() => handleSignup()} style={{color: Colors.secondary_color, cursor: 'pointer'}}>Create an Account</span>
                    </h5>
                    <br />
                    <br />
                    {errors && <DangerAlert message={errors} />}
                        <span className='align-self-end' style={{color: Colors.secondary_color, cursor: 'pointer'}}
                        onClick={() => handleGuestLogin()}
                        >Login as Guest</span>
                </Container>
            </div>
            <div className='registration-area position-relative'>
                <Image
                className='registration-image'
                src={registration}/>
                <div className='position-absolute registration-overflow d-flex flex-column justify-content-center align-items-center'>
                    <h2 className='text-light opacity07 fw-bolder'>GamingHub.com</h2>
                    <span className='text-light lead opacity07'>A gaming hub for professional gamers</span>
                </div>
            </div>
        </div>
    )
}