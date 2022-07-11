import { Alert } from "react-bootstrap"


export const DangerAlert = ({ message }) => {
    return(
        <Alert
        className="w-100"
         variant='danger'>
       {message}
      </Alert>
    )
}