import CartWidget from "./CartWidget"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'



const NavBar = () => {
    return (
       <>
       
       <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Delirium Joyas</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Productos</Nav.Link>
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
  <CartWidget />
</Navbar>
  


 
</>
    )
}

export default NavBar
