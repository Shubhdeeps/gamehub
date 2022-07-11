import { Dropdown, DropdownButton } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import { useLogoutUser } from "../../../hooks"

export const LoginUserBtn = () => {
  const navigate = useNavigate()
  const { logout } = useLogoutUser()
  const username = useSelector(s => s.users).username

  const handleRegister = (param) => {
    navigate(`/user/${param}`, { replace: true });
  }

  const handleLogout = () => {
    logout()
  }
 
    return(
             <DropdownButton
          variant="danger"
          className="mt-2 mb-2"
          title={username !== '' ? `Welcome, ${username} ` : 'Guest'}
          id="input-group-dropdown-1"
        >
          <Dropdown.Item onClick={() => handleRegister('login')}>Log in</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => handleLogout()}>Log out</Dropdown.Item>
        </DropdownButton>
    )
}