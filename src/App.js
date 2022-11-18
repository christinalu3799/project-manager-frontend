import React, { useEffect, useRef, useState} from 'react';
import {Route, Routes, useNavigate, Link} from 'react-router-dom';
// import react-bootstrap components ===============================================
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './stylesheets/Index.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import components ================================================================
import Index from './pages/Index'
import ProjectCard from './components/ProjectCard'

import RegisterUser from './components/RegisterUser';
import LoginUser from './components/LoginUser';
import NewProject from './pages/NewProject';
import CompletedProjects from './pages/CompletedProjects'
import DeletedProjects from './pages/DeletedProjects';
import Show from './pages/Show'
import NotFound from './pages/NotFound'

// ==================================================================================
let baseURL
process.env.REACT_APP_NODE_ENV === 'development'
? (baseURL = process.env.REACT_APP_DEV_URL)
: (baseURL = process.env.REACT_APP_BACKEND_URL)    

console.log('baseURL: ', baseURL)

const App = () => {
    const navigate = useNavigate()
    
    const [user, setUser] = useState()
    
    // get all projects =============================================================
    const [projects, setProjects] = useState(null)

    const getProjects = () => {
        console.log('----------calling getProjects() in App.js')
        fetch(`${baseURL}/api/v1/projects/`, {
            credentials: 'include'
        })
        .then((res) => res.json())
        .then(resJson => {
            setProjects(resJson.data)
            console.log('project now set in App.js!')
        })
    }
  
    // register =====================================================================
    const [registerSuccess, setRegister] = useState(null)
    const register = (e) => {
        e.preventDefault()
        fetch(`${baseURL}/api/v1/users/register`, {
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
            console.log(resJson)
            setUser(resJson.data.username)
            localStorage.setItem('user', JSON.stringify(resJson.data.username))
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
        // console.log(e.target.username.value)
        console.log(e.target.email.value)
        console.log(e.target.password.value)
        fetch(`${baseURL}/api/v1/users/login`, {
            method: 'POST',
            body: JSON.stringify({
                // username: e.target.username.value,
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
            console.log(resJson)
            setUser(resJson.data.username)
            localStorage.setItem('user', JSON.stringify(resJson.data.username))
            if (resJson.status.code === 401) {
                console.log(resJson.status.message)
                setLogin(false)
            } else {
                setLogin(true)
                navigate('/index')
            }
        })
    }

    // logout =======================================================================
    const logout = (e) => {
        e.preventDefault()
        localStorage.clear()
        setUser()
        fetch(`${baseURL}/api/v1/users/logout`)
        navigate('/login')
    }
    // show page project id =========================================================
    const currentProject = JSON.parse(localStorage.getItem('showProject'))
    console.log('CURRENT PROJECT ----- HERE IN APP -----:', currentProject)

    const [showProject, setShowProject] = useState(null)
    // update project ===============================================================
    
    const [projectToUpdate, setProjectToUpdate] = useState({
            project_name: '',
            project_deadline: '',
            project_description: '',
            project_status: ''
    })

    const updateProject = (id) => {

        console.log('----IN updateProject in App.js')
        
        setProjects((prev) => {
            return prev.map((p) => {
                if (p.id === id) {
                    return projectToUpdate
                } else {
                    return p
                }
            })
        })
        getProjects()
        // window.location.reload(true)
        console.log(projects)
    
    }

    // deleted projects =============================================================
    const [deletedProjects, setDeletedProjects] = useState([])
    
    useEffect(() => {
        getProjects()
        const loggedInUser = localStorage.getItem('user')
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser)
            setUser(foundUser)
        }
        if (currentProject) {
            setShowProject(currentProject)
        }

    }, [])
    // ==================================================================================
    return (
        <div className='main'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className='nav-container'>
                    <Navbar.Brand as={Link} to="/index">Project Manager</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='custom-nav'>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/new-project">Add New Project</Nav.Link>
                            <NavDropdown title="See More" className='custom-nav-dropdown'>
                                <NavDropdown.Item as={Link} to="/completed-projects">View Completed Projects</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/deleted-projects">View Deleted Projects</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {user === undefined ? 
                                <>
                                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                </>
                                :
                                <>
                                    <NavDropdown title={`Welcome back ${user}!`} className='custom-nav-dropdown'>
                                        <NavDropdown.Item as={Link} to="/" onClick={logout}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route path='/index' element={<Index 
                    user={user} 
                    projects={projects}
                    setShowProject={setShowProject} 
                    showProject={showProject} 
                    deletedProjects={deletedProjects} 
                    setDeletedProjects={setDeletedProjects}/>} />

                <Route path='/new-project' element={<NewProject 
                    user={user}/>} />

                <Route path='/completed-projects' element={<CompletedProjects 
                    user={user} projects={projects}/>}/>

                <Route path='/deleted-projects' element={<DeletedProjects 
                    user={user}/>}/>

                <Route path='/show/:id' element={<Show 
                    projects={projects}
                    setProjects={setProjects}
                    getProjects={getProjects}
                    updateProject={updateProject}
                    showProject={showProject} 
                    setShowProject={setShowProject}
                    projectToUpdate={projectToUpdate}
                    setProjectToUpdate={setProjectToUpdate}/>}/>

                <Route path='/register' element={<RegisterUser 
                    register={register} 
                    registerSuccess={registerSuccess}/>} />

                <Route path='/' element={<RegisterUser 
                    register={register} 
                    registerSuccess={registerSuccess}/>} />

                <Route path='/login' element={<LoginUser 
                    login={login} 
                    loginSuccess={loginSuccess}/>} />

                <Route path='*' element={<NotFound/>}/>

            </Routes>
            

            


        </div>

    );
}

export default App;
