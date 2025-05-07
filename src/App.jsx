import { Nav,Navbar, Container,NavDropdown } from "react-bootstrap"
import two from "./assets/two.png"
function App() {


  return (
    <>
      <Navbar expand="lg" className="mansur">
      <Container>
        <Navbar.Brand href="#home">
          <img src={two} alt="LOGO (1)" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <Nav.Link href="#link">About me</Nav.Link>
            <Nav.Link href="#link">Portfolio</Nav.Link>
            <Nav.Link href="#link">Contact me</Nav.Link>
          </Nav>
          <div className="con_btn">
            <button>Hire Me</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default App
