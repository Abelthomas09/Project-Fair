import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenContext } from '../contexts/TokenAuth'

const Header = ({insideDashboard}) => {

  const {authorisedUser,setAuthorisedUser} = useContext(tokenContext)
  const navigate = useNavigate()

  const logout = ()=>{
    sessionStorage.clear()
    setAuthorisedUser(false)
    navigate('/')
  }
  return (
    <Navbar style={{zIndex:'1'}} className="shadow border rounded position-fixed w-100">
        <Container>
          <Navbar.Brand>
          <Link className='text-decoration-none fw-bolder' to={'/'}><i className="fa-brands fa-docker"></i>Project Fair</Link>
          </Navbar.Brand>
          {
            insideDashboard &&
            <button onClick={logout} className='btn btn-link fw-bolder me-1'>Logout <i className="fa-solid fa-right-from-bracket"></i></button>
          }
        </Container>
      </Navbar>
  )
}

export default Header