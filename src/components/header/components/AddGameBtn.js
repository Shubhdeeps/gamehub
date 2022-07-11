import { useState } from "react"
import { Button } from "react-bootstrap"
import { AddGame } from "../../modals/AddGame"
import { useSelector } from "react-redux"
import { LoginAlert } from "../../modals/LoginAlert"

export const AddGameBtn = () => {
    const [show, setShow] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const username = useSelector(s => s.users).username

    const handleAddGame = () => {
        if(username){
            setShow(true)
        }else{
            setShowAlert(true)
        }
    }
    return(
        <>
        <Button onClick={() => handleAddGame(true)} variant="danger" className="rounded-1 mt-2 mb-2 ps-4 pe-4" >
            Add Game
        </Button>
        <AddGame show={show} setShow={setShow} />
        <LoginAlert  show={showAlert} setShow={setShowAlert} />
        </>
    )
}