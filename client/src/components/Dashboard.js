import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { DashboardThree } from "./DashboardThree";
import placeholder from '../assets/img/placeholder.jpeg';

export const Dashboard = () => {
    const items = [
        {
            title: "Placeholder",
            description: "This is a test",
            imgUrl: placeholder,
        },
        {
            title: "Placeholder",
            description: "This is a test",
            imgUrl: placeholder,
        },
        {
            title: "Placeholder",
            description: "This is a test",
            imgUrl: placeholder,
        }
    ];

    return (
        <section className='dash'>
            <Container className='masterDash'>
                <Row className='dashTop'>
                    <h2 className='dashTop-head'>Some shit title IDK</h2>
                    <p>Some Lorem-Fucking-Ipsum Bullshit</p>
                </Row>
                <Col size={12} className='dashTest'>
                    <Row className='dashBottom'>
                        {
                            items.map((item, index) => {
                                return (
                                    <DashboardThree
                                    key = {index}
                                    {...item}
                                    />
                                )
                            })
                        }
                    </Row>
                </Col>
            </Container>
        </section>
    )
}
