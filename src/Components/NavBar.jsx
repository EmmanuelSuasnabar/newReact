import CartWidget from "./CartWidget"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from "react-router-dom"
import { useCartContext } from '../context/cartContext'


const NavBar = (props) => {
  const {count} = props
  const {iconoCarrito} = useCartContext()

    return (
       <>
       
       <Navbar bg="light" expand="lg">
  <Container>
    <Link exact to='/'>  
    <Navbar.Brand href="#home">Delirium Joyas</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      
      <Link exact to='/categoria/plata'>
      <Nav.Link href="#home">Plata</Nav.Link>
      </Link>
      <Link exact to='/categoria/oro'>
      <Nav.Link href="#link">Oro</Nav.Link>
      </Link>
        
        <Nav.Link href="#link">Nosotros</Nav.Link>
        <Nav.Link href="#link">Contacto</Nav.Link>
        <NavDropdown title="Tienda" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Anillos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Aros</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Pulceras</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Looks</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container> 
  <Link exact to='/cart'>
  {iconoCarrito()}
  <CartWidget count= {count} />
  </Link>
</Navbar>
  


 
</>
    )
}

export default NavBar
