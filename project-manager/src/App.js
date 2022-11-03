import React, { useState } from 'react';
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
    const [projects, setProjects] = useState([
        {
            project_name: 'My first project!',
            project_deadline: '2022-11-15',
            project_description: 'ajlfksdaj; djaksl;fd jalsk;djf a;lwkefjaw lkefjaw',
            project_status: 'in progress',
        },
        {
            project_name: 'My second project!',
            project_deadline: '2022-12-15',
            project_description: 'ajlfksdaj; djaksl;fd jalsk;djf a;lwkefjaw lkefjaw',
            project_status: 'not started',
        },
        {
            project_name: 'My third project!',
            project_deadline: '2022-12-23',
            project_description: 'ajlfksdaj; djaksl;fd jalsk;djf a;lwkefjaw lkefjaw',
            project_status: 'not started',
        }
    ])

    const register = (e) => {
        e.preventDefault()
        console.log('register!')
    }
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
                <Route path='/register' element={<RegisterUser register={register}/>} />
                <Route path='/login' element={<LoginUser/>} />

            </Routes>

        </div>
    );
}

export default App;
