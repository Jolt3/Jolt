import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {Navigation} from './Navigation';
import {Header} from './Header';
import {Dashboard} from '../Pages/Dashboard';
import {Goals} from '../Pages/Goals';
import {Expenses} from '../Pages/Expenses';
import {Budgeting} from '../Pages/Budgeting';

export const Master = () => {

    const [currentPage, setCurrentPage] = useState('dashboard')
    const renderPage = () => {
        // if (currentPage === 'dashboard') {
        //     return <Dashboard />
        // }
        // if (currentPage === 'goals') {
        //     return <Goals />
        // }
        // if (currentPage === 'expenses') {
        //     return <Expenses />
        // }
        // if (currentPage === 'budgeting') {
        //     return <Budgeting />
        // }
        switch(currentPage) {
            case 'dashboard':
                return <Dashboard />;
            case 'goals':
                return <Goals />;
            case 'budgeting':
                return <Budgeting />;
            case 'expenses':
                return <Expenses />;
            default:
                return <Dashboard />;
        }
    }

    const pageSwitch = (page) => {
        setCurrentPage(page)
    }

    return (
        <Container className='master'>
            <Navigation currentPage={currentPage} pageSwitch={pageSwitch}/>
            <Header />
            <main className='main-styling'>
                {renderPage()}
            </main> 
        </Container>
    )
}