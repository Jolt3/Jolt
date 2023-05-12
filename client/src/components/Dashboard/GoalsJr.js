import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

export const GoalsJr = ({ title, description }) => {
    return (
        <Col sm={6} md={4}>
            <div className='goalThree'>
                <h4 className="goalThree-title">{title}</h4>
                <span className='goalThree-desc'>{description}</span>
            </div>
        </Col>
    )
}
