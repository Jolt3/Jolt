import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/JOLT-logo.png';
import home from '../assets/img/icons8-home-60.png';
import goals from '../assets/img/icons8-saving-64.png';
import budget from '../assets/img/icons8-budgeting-64.png';
import expenses from '../assets/img/icons8-analytics-60.png';

// <a target="_blank" href="https://icons8.com/icon/59809/home">Home</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icon/AYU8q9jCdaxc/saving">Saving</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icon/wdfmkgweCGDk/analytics">Analytics</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icon/HWom09vVRDND/budgeting">Budgeting</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

export const Navigation = () => {
    return (
        // <Navbar expand="lg">
        //     <Container>
        //         <Navbar.Brand>
        //             <img className="logo" src={logo} alt="Logo" />
        //         </Navbar.Brand>
        //         <Navbar.Collapse id="basic-navbar-nav">

        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
        <div className='sidenav'>
            <img src={logo} alt='logo' className='logo' />
            <div className='navigate'>
                <a href='#section'><img src={home} alt="Home" /></a>
                <span className='nav-text'>Dashboard</span>
                <a href='#section'><img src={goals} alt="Goals" /></a>
                <span className='nav-text'>Goals</span>
                <a href='#section'><img src={budget} alt="Budget" /></a>
                <span className='nav-text'>Budgeting</span>
                <a href='#section'><img src={expenses} alt="Expenses" /></a>
                <span className='nav-text'>Expenses</span>
                <button className='test'>TEST</button>
            </div>
        </div>
    )
};