import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { BudgetingJr } from '../components/Dashboard/BudgetingJr';
import DoughnutChart from '../components/Bucket';

export const Budgeting = () => {
    const items = [
        {
            title: "Budget-Placeholder",
            description: "This is a test",
        },
        {
            title: "Budget-Placeholder",
            description: "This is a test",
        },
        {
            title: "Budget-Placeholder",
            description: "This is a test",
        }
    ];

    return (
        <section className='budget-master'>
            <Container className='budget-main'>
                <Col className='budget-left'>
                    <DoughnutChart style={{width: '100%', height: '100%'}} />
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