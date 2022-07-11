import { Form } from "react-bootstrap"

export const InputTextArea = ({title, value, setValue}) => {
    return(
        <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>{title} </Form.Label>
        <Form.Control 
        as="textarea" 
        rows={3} 
        value={value}
        onChange={e => setValue(e.target.value)}
        />
      </Form.Group>
    )
}