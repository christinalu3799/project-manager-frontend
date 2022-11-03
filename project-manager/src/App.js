import React from 'react';
import {Route, Routes} from 'react-router-dom';

// import react-bootstrap components ===============================================
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// import components ================================================================
import Index from './components/Index'
import RegisterUser from './components/RegisterUser';
import LoginUser from './components/LoginUser';
import NewProject from './components/NewProject';
import CompletedProjects from './components/CompletedProjects'
import DeletedProjects from './components/DeletedProjects';
import Show from './components/Show'
// ==================================================================================
const App = () => {
  return (
    <div >

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/index">Project Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/new-project">Add New Project</Nav.Link>
                        <NavDropdown title="See More" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/completed-projects">View Completed Projects</NavDropdown.Item>
                            <NavDropdown.Item href="/deleted-projects">View Deleted Projects</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/show">show (delete later)</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Routes>
            <Route path='/index' element={<Index />} />
            <Route path='/new-project' element={<NewProject/>} />

            <Route path='/completed-projects' element={<CompletedProjects/>}/>
            <Route path='/deleted-projects' element={<DeletedProjects/>}/>
            
            <Route path='/show' element={<Show/>} />
            <Route path='/register' element={<RegisterUser/>} />
            <Route path='/login' element={<LoginUser/>} />

        </Routes>

    </div>
  );
}

export default App;
