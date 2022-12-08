import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css'
import Logo from '../../../images/logo.png'
import { ContextUser } from '../../../App';
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from 'react-router-dom';


const Navigation = () => {
    const [user, setUser] = useContext(ContextUser);
    
    const history = useHistory()
    const handleLogOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            const signOut ={
                name:'',
                email:'',
                photo:''
            }
            setUser(signOut)
            history.push('/')
        }).catch((error) => {
            
        });
    }
    return (
        <Navbar bg="dark" fixed='top' variant="dark" expand="lg">
            <Container>
                <NavLink to="/home"><img src={Logo} alt="" /></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto text-light nav-item ">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/travels">Travels</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        {user.email && <>
                            <NavLink to="/allBookings">All Booking</NavLink>
                            <NavLink to="/myBookings">My Booking</NavLink>
                            <NavLink to="/addTravel">Add Travel</NavLink>
                        </>
                        }

                    </Nav>
                    <h5 className='text-light py-2  mr-2'>{user.name}</h5>
                    {user.email ? <NavLink onClick={handleLogOut} className="btn btn-light text-dark button-font px-3" to="/login">logOut</NavLink>
                        :
                        <NavLink className="btn btn-light text-dark button-font px-4" to="/login">login</NavLink>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;