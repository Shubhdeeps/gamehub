import React, {  useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { postNewGame } from '../../service/game.service';
import { DangerAlert } from '../alerts/DangerAlert';
import { InputForm } from './components/InputForm';
import { InputMultiple } from './components/InputMultiple';
import { InputTextArea } from './components/InputTextArea';
import uuid from 'react-uuid'
import { useUsrFavouriteGames } from '../../hooks';
import { addFavouriteGame } from '../../service/user.services';

export function AddGame({show, setShow}) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [genre, setGenre] = useState('')
  const [rating, setRating] = useState('')
  const [tags, setTags] = useState('')
  const [platforms, setPlatforms] = useState('')
  const [developers, setDevelopers] = useState('')
  const [released, setReleased] = useState('')
  const [website, setWebsite] = useState('')
  const [alert, setAlert] = useState('')
  const { setUserFavourite } = useUsrFavouriteGames()

  const handleClose = () => setShow(false);

  const handleSave = () => {
    if(name){
      const id = uuid()
      const newGame = {
        id,
        name,
        description,
        genre,
        rating,
        tags,
        platforms,
        developers,
        released,
        website
      }
      console.log(newGame)
      postNewGame(newGame)
      addFavouriteGame({newgame: {id, name}}, setNewGame)
      handleClose()
    }else{
      setAlert('Game name required')
    }
  }
  const setNewGame = (game) => {
    setUserFavourite()
  }

  return (
    <>
      <Modal
      centered
      show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputForm title='Name' value={name} setValue={setName} />
           <InputTextArea title='Description' value={description} setValue={setDescription} />
            <InputMultiple title='Genres' value={genre} setValues={setGenre} />
            <InputForm title='rating' type='number' value={rating} setValue={setRating}/>
            <InputMultiple title='Tags' value={tags} setValues={setTags} /> 
            <InputMultiple title='Platforms' value={platforms} setValues={setPlatforms} /> 
            <InputMultiple title='Developers' value={developers} setValues={setDevelopers} /> 
            <InputForm title='Released' value={released} setValue={setReleased} />
            <InputForm title='Website' value={website} setValue={setWebsite} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {alert && <DangerAlert message={alert}/> }
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

