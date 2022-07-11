import { Form } from "react-bootstrap"

export const InputForm = ({title, type = 'text', value, setValue}) => {
    return(
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{title}</Form.Label>
              <Form.Control
                value={value}
                onChange={e => setValue(e.target.value)}
                type={type}
                placeholder={title}
              />
            </Form.Group>
    )
}