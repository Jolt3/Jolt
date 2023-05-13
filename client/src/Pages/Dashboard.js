import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { DashboardThree } from "../components/Dashboard/DashboardThree";
import placeholder from '../assets/img/placeholder.jpeg';
import AccountBalanceChart from '../components/Dashboard/AccountBalance';

export const Dashboard = () => {
    // const items = [
    //     {
    //         title: "Placeholder",
    //         description: "This is a test",
    //         imgUrl: placeholder,
    //     },
    //     {
    //         title: "Placeholder",
    //         description: "This is a test",
    //         imgUrl: placeholder,
    //     },
    //     {
    //         title: "Placeholder",
    //         description: "This is a test",
    //         imgUrl: placeholder,
    //     }
    // ];

    return (
        <section className='dash'>
            <Container className='masterDash'>
                <Row className='dashTop'>
                    <AccountBalanceChart></AccountBalanceChart>
                </Row>
                {/* <Col size={12} className='dashTest'>
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
                </Col> */}
            </Container>
        </section>
    )
}
