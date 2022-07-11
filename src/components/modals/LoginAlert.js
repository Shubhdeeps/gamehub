import { Button, Modal } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

export const LoginAlert = ({show, setShow}) => {
    const navigate = useNavigate()
    const handleClose = () => {
        setShow(false)
    }
    const handleNav = () => {
        setShow(false)
        navigate(`/user/login`, { replace: true });
    }
    return(
        <>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in required</Modal.Title>
        </Modal.Header>
        <Modal.Body>Log in to your account to add a new book.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleNav}>
            Log in
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}