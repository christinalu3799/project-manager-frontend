import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css'

const App = () => {
  return (
    <div >

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Project Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* separate web title with nav items on right */}
                    </Nav>
                    <Nav>
                        <Nav.Link href="#new">Add New Project</Nav.Link>
                        <NavDropdown title="See More" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#deleted">View Deleted Projects</NavDropdown.Item>
                            <NavDropdown.Item href="#completed">View Completed Projects</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    </div>
  );
}

export default App;
