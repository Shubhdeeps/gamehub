import { Alert } from "react-bootstrap"


export const SuccessAlert = ({ message }) => {
    return(
        <Alert
        className="w-100"
         variant='success'>
       {message}
      </Alert>
    )
}