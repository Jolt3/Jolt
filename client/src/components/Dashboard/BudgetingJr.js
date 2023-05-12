import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

export const BudgetingJr = ({ title, description }) => {
    return (
        <Col sm={6} md={4}>
            <div className='budgetThree'>
                <h4 className="budgetThree-title">{title}</h4>
                <span className='budgetThree-desc'>{description}</span>
            </div>
        </Col>
    )
}