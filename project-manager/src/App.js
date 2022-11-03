import React, { useState } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';

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
    const navigate = useNavigate()

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

    // const getProjects = () => {
        
    // }
    // register/login =================================================================
    const [user, setUser] = useState(null)
    const register = (e) => {
        e.preventDefault()
        setUser(e.target.username.value)
        fetch('http://localhost:8000/api/v1/users/register', {
            method: 'POST',
            body: JSON.stringify({
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }, 
            credentials: 'include'
        })
        .then (res => res.json())
        .then (resJson => {
            navigate('/index')
            console.log('register!')
        })
    }

    const login = (e) => {
        e.preventDefault(e)
        setUser(e.target.username.value)
        setUser(e.target.username.value)
        fetch('http://localhost:8000/api/v1/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then (res => res.json())
        .then (resJson => {
            navigate('/index')
        })
    }
    const logout = (e) => {
        e.preventDefault()
        console.log('successfully logged out')
        fetch('http://localhost:8000/api/v1/users/logout')
    }
    // ================================================================================
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
                            {user === null ? 
                                <>
                                    <Nav.Link href="/register">Register</Nav.Link>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                </>
                                :
                                <>
                                    <Navbar.Text>Welcome back {user}!</Navbar.Text>
                                    <Nav.Link href="/index" onClick={() => logout()}>Logout</Nav.Link>
                                </>
                            }
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
                <Route path='/login' element={<LoginUser login={login}/>} />

            </Routes>

        </div>
    );
}

export default App;
