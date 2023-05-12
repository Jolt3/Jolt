import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { BudgetingJr } from '../components/Dashboard/BudgetingJr';

export const Budgeting = () => {
    const items = [
        {
            title: "Goals-Placeholder",
            description: "This is a test",
        },
        {
            title: "Goals-Placeholder",
            description: "This is a test",
        },
        {
            title: "Goals-Placeholder",
            description: "This is a test",
        }
    ];

    return (
        <section className='budget-master'>
            <Container className='budget-main'>
                <Col className='budget-left'>
                    <h2 className='left-head'>Budget</h2>
                    <p className='left-content'>Here is where we will put content</p>
                </Col>
                <Col size={7} className='budget-right'>
                    <Row className='right-content'>
                        {
                            items.map((item, index) => {
                                return (
                                    <BudgetingJr
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