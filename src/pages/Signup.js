import registration from '../assets/images/registration.png'
import { Button, Container, Image } from "react-bootstrap"
import { Colors } from "../assets/Colors"
import { DangerAlert, InputTextField } from "../components"
import { useSignupUser } from '../hooks/useSignupUser'
import { useNavigate } from 'react-router-dom'

export const SignupPage = () => {
    const navigate = useNavigate()
    const {
        email,
        setEmail,
        password,
        setPassword,
        username,
        setUsername,
        errors,
        signup } = useSignupUser()

    const handleSingup = () => signup()
    const handleLoginGuest = () => {
        navigate(`/dashboard`, { replace: true });
    }

    return(
        <div className='login-page d-flex flex-row'> 
        <div className='registration-area d-flex align-items-center'>
            <Container className='d-flex flex-column align-items-center'
            >
                <h1 className='fw-bolder mb-5'>Signup</h1>
                <InputTextField title='Username' placeholder='John102' value={username} setValue={setUsername} />
                <br />
                <InputTextField title='Email' placeholder='John.smith@gmail.com' type='email' value={email} setValue={setEmail} />
                <br />
                <InputTextField title='Password' placeholder='Password' type='password' value={password} setValue={setPassword} />
                <br /><br />
                <Button 
                variant='danger' 
                className='rounded-pill mb-5' 
                style={{background: Colors.secondary_color,
                    width: '60%'
                }}
                onClick={() => handleSingup()}
                >
                   <h4>Signup</h4> 
                </Button>
                {errors && <DangerAlert message={errors}/>}
                <div className='d-flex flex-row justify-content-between w-100'>
                    <span
                    onClick={() => handleLoginGuest()}
                    className='align-self-end' style={{color: Colors.secondary_color, cursor: 'pointer'}}>Login as Guest</span>
                </div>
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