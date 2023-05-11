import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {Login} from './Login-Spinner';
import Logo from '../assets/img/JOLT-logo.png';
// import BG from '../assets/img/Wallpaper.jpg';
// import Background from '../assets/img/LoginWallpaper.jpg';
import Vector from '../assets/img/vectorbackground.png';

/* <a href='https://pngtree.com/free-backgrounds'>free background photos from pngtree.com/</a> */

export const Start = () => {
    return (
        // <Container className='start-master' style={{backgroundImage:`url(${Background})`, width:'100%'}}>
        <Container className='start-master' style={{backgroundImage:`url(${Vector})`, backgroundRepeat: 'no-repeat', position: 'absolute', zIndex: '-999', width:'100%'}}>
        {/* <Container className='start-master'> */}
            <Col className='start-left'>
                <h1 className='start-head'>Welcome to JOLT</h1>
                <div className='start-desc-container'>
                    <p className='start-desc'>A lightning-fast option to jump-start your budgeting</p>
                </div>
            </Col>
            <Col className='start-right'>
                <Login />
            </Col>
        </Container>
    )
}