import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/JOLT-logo.png';

export const Navigation = () => {
    return (
        <Navbar expand="lg">
            <Container className='inline'>
                <Navbar.Brand>
                    <img className="logo" src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className='logOut'>
                    <span className="contact-me">
                        <button className="contact-button">
                            <span className='talk'>Log Out</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};