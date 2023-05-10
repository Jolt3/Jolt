import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ExpensesJr } from './ExpensesJr';

export const Expenses = () => {
    const items = [
        {
            title: "Expenses-Placeholder",
            description: "This is a test",
        },
        {
            title: "Expenses-Placeholder",
            description: "This is a test",
        },
        {
            title: "Expenses-Placeholder",
            description: "This is a test",
        }
    ];

    return (
        <section className='expense-master'>
            <Container className='expense-main'>
                <Col className='expense-left'>
                    <h2 className='left-head'>Expenses</h2>
                    <p className='left-content'>Here is where we will put content</p>
                </Col>
                <Col size={7} className='expense-right'>
                    <Row className='right-content'>
                        {
                            items.map((item, index) => {
                                return (
                                    <ExpensesJr
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