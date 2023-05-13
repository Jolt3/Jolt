import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { GoalsJr } from '../components/Dashboard/GoalsJr';
import GoalList from '../components/Goal/GoalList';

export const Goals = () => {
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
        <section className='goal-master'>
            <Container className='goal-main'>
                <Col className='goal-left'>
                    <GoalList />
                </Col>
                {/* <Col size={7} className='goal-right'>
                    <Row className='right-content'>
                        {
                            items.map((item, index) => {
                                return (
                                    <GoalsJr
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
