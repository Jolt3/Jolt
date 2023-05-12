import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {Navigation} from './Navigation';
import {Header} from './Header';
import {Dashboard} from './Dashboard';

export const Master = () => {
    return (
        <Container className='master'>
            <Navigation />
            <Header />
            <Dashboard />
        </Container>
    )
}