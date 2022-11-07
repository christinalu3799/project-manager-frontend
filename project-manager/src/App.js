import React, { useState, useContext } from 'react';
import {Route, Routes, useNavigate, Link} from 'react-router-dom';
import { ProjectProvider  } from './contexts/ProjectContext';
import { ProjectContext  } from './contexts/ProjectContext'

// import react-bootstrap components ===============================================
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import components ================================================================
import Index from './pages/Index'
import RegisterUser from './components/RegisterUser';
import LoginUser from './components/LoginUser';
import NewProject from './components/NewProject';
import CompletedProjects from './components/CompletedProjects'
import DeletedProjects from './components/DeletedProjects';
import Show from './pages/Show'
// ==================================================================================
const App = () => {
    const navigate = useNavigate()

    // register =====================================================================
    const [user, setUser] = useState(null)
    const [registerSuccess, setRegister] = useState(null)
    const register = (e) => {
        e.preventDefault()
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
            if (resJson.status.code === 401) {
                console.log(resJson.status.message)
                setRegister(false)
            } else {
                setUser(e.target.username.value)
                setRegister(true)
                navigate('/index')
            }
        })
    }
    
    // login ========================================================================
    const [loginSuccess, setLogin] = useState(null)
    const login = (e) => {
        e.preventDefault(e)
        console.log(e.target.username.value)
        console.log(e.target.email.value)
        console.log(e.target.password.value)
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
            if (resJson.status.code === 401) {
                console.log(resJson.status.message)
                setLogin(false)
            } else {
                setUser(e.target.username.value)
                setLogin(true)
                navigate('/index')
            }
        })
    }

    // logout =======================================================================
    const logout = (e) => {
        e.preventDefault()
        fetch('http://localhost:8000/api/v1/users/logout')
        console.log('successfully logged out')
    }
    // show page project id =========================================================
    const [showId, setShowId] = useState(null)
    const [showProject, setShowProject] = useState(null)

    
// ==================================================================================
    return (
        <ProjectProvider>
            <div className='main'>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container className='nav-container'>
                        <Navbar.Brand as={Link} to="/index">Project Manager</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                
                                    {/* <Link to="/new-project" className='nav-item'>Add New Project</Link> */}
                                
                                <Nav.Link as={Link} to="/new-project">Add New Project</Nav.Link>
                                <NavDropdown title="See More">
                                    <NavDropdown.Item as={Link} to="/completed-projects">View Completed Projects</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/deleted-projects">View Deleted Projects</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to="/show">show (delete later)</Nav.Link>
                                {user === null ? 
                                    <>
                                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    </>
                                    :
                                    <>
                                        <NavDropdown title={`Welcome back ${user}!`}>
                                            {/* <Navbar.Text>Welcome back {user}!</Navbar.Text> */}
                                            <NavDropdown.Item as={Link} to="/" onClick={() => logout()}>Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    </>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path='/index' element={<Index setShowId={setShowId}/>} />
                    <Route path='/new-project' element={<NewProject/>} />

                    <Route path='/completed-projects' element={<CompletedProjects/>}/>
                    <Route path='/deleted-projects' element={<DeletedProjects/>}/>
                    

                    <Route path='/show' element={<Show showId={showId} setShowProject={setShowProject} showProject={showProject}/>}/>

                    <Route path='/register' element={<RegisterUser register={register} registerSuccess={registerSuccess}/>} />
                    <Route path='/' element={<RegisterUser register={register} registerSuccess={registerSuccess}/>} />
                    <Route path='/login' element={<LoginUser login={login} loginSuccess={loginSuccess}/>} />
                </Routes>
            </div>
        </ProjectProvider>
    );
}

export default App;
