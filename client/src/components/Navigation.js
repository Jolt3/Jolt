import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/JOLT-logo.png';
import home from '../assets/img/icons8-home-60.png';
import goals from '../assets/img/icons8-saving-64.png';
import budget from '../assets/img/icons8-budgeting-64.png';
import expenses from '../assets/img/icons8-analytics-60.png';
import Link from './Link';
// import bank from '../assets/img/icons8-bank-account-96.png';

// <a target="_blank" href="https://icons8.com/icon/59809/home">Home</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icon/AYU8q9jCdaxc/saving">Saving</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icon/wdfmkgweCGDk/analytics">Analytics</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icon/HWom09vVRDND/budgeting">Budgeting</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icon/6lV0KFMWPPsB/bank-account">Bank Account</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

export const Navigation = ({currentPage, pageSwitch}) => {
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
        <div className='sidenav media'>
            <img src={logo} alt='logo' className='logo' />
            <div className='navigate'>
                <a href='#dashboard' onClick={() => pageSwitch('dashboard')} className={currentPage === 'dashboard'}><img src={home} alt="Home" /></a>
                <span className='nav-text'>Dashboard</span>
                <a href='#goals' onClick={() => pageSwitch('goals')} className={currentPage === 'goals'}><img src={goals} alt="Goals" /></a>
                <span className='nav-text'>Goals</span>
                <a href='#budgeting' onClick={() => pageSwitch('budgeting')} className={currentPage === 'budgeting'}><img src={budget} alt="Budget" /></a>
                <span className='nav-text'>Budgeting</span>
                <a href='#expenses' onClick={() => pageSwitch('expenses')} className={currentPage === 'expenses'}><img src={expenses} alt="Expenses" /></a>
                <span className='nav-text'>Expenses</span>
                {/* <a href='#section'><img src={bank} alt="Bank" /></a>
                <span className='nav-text'>Link Account</span> */}
                <Link />
            </div>
        </div>
    )
};