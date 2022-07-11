import { useState } from "react"
import { Button, Form } from "react-bootstrap"


export const InputMultiple = ({title, type='text', setValues}) => {
    const [value, setValue] = useState('')
    const [array, setArray] = useState([])
  
    const handleClick = () => {
        if(value){
            const arrayOfItems = array
            arrayOfItems.push(value)
            setArray(arrayOfItems)
            setValue('')
            setValues(arrayOfItems)
        }
    }
    const handleDelete = (val) => {
        const items = array.filter(x =>  x !== val )
        setArray(items)
        setValue(items)
    }

    return(
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{title}</Form.Label>
        <div className=""> 
            {array.map((x, index) => {
                return (
                <div className="border mb-2 ps-1 d-flex align-items-center justify-content-between" key={x}> 
                <h6 className="lead"> {index + 1}. {x} </h6>
                <Button onClick={() => handleDelete(x)} size='sm' variant='outline-secondary'>X</Button>
                </div>)
            })}
        </div>
        <div className="d-flex gap-2">
            <div className="border p-2 rounded">{array.length + 1}.</div>
            <Form.Control
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type={type}
            placeholder={title}
            />
            <Button onClick={() => handleClick()}>Add</Button>
        </div>
      </Form.Group>
    )
}